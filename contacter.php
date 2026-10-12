<?php
// CORS beállítások (engedélyezzük a saját domain-edet és teszteléshez a localhostot is)
$allowed_origin = "https://weboldal-rendeles.hu";
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === "http://localhost:4200") {
    $allowed_origin = "http://localhost:4200";
}

header("Access-Control-Allow-Origin: " . $allowed_origin);
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Bemeneti adatok fogadása
$input = file_get_contents("php://input");
$data = json_decode($input);

if (!$data || empty($data->nev) || empty($data->email) || empty($data->uzenet)) {
    echo json_encode(["success" => false, "message" => "Hiányzó vagy érvénytelen adatok!"]);
    exit();
}

$smtpHost     = 'we041.tarhely.com';     
$smtpPort     = 465;                        
$smtpUser     = 'admin@weboldal-rendeles.hu';      
$smtpPass     = 'Isnisnisn333_';          
$címzettEmail = 'zelikdaniel33@gmail.com'; 

$nev = htmlspecialchars(trim($data->nev));
$email = htmlspecialchars(trim($data->email));
$telefon = !empty($data->telefon) ? htmlspecialchars(trim($data->telefon)) : 'Nem adta meg';
$uzenetText = htmlspecialchars(trim($data->uzenet));

$targy = "Új üzenet a weboldalról: $nev";

$uzenetBody = "
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family: Arial, sans-serif; color: #333;'>
    <h2>Új megkeresés érkezett az Aquarell weboldalról</h2>
    <p><strong>Név:</strong> {$nev}</p>
    <p><strong>E-mail:</strong> {$email}</p>
    <p><strong>Telefon:</strong> {$telefon}</p>
    <hr style='border: none; border-top: 1px solid #ddd;'>
    <p><strong>Üzenet:</strong></p>
    <p style='background: #fdfbf7; padding: 15px; border-radius: 8px;'>" . nl2br($uzenetText) . "</p>
</body>
</html>
";

// Stabilabb SMTP küldő függvény
function sendSimpleSmtp($host, $port, $user, $pass, $from, $to, $replyTo, $subject, $htmlBody) {
    $socketHost = "ssl://{$host}";
    $socket = @fsockopen($socketHost, $port, $errno, $errstr, 20);

    if (!$socket) {
        return "Nem sikerült kapcsolódni az SMTP szerverhez: $errstr ($errno)";
    }

    $read = function() use ($socket) {
        $response = "";
        while ($str = fgets($socket, 515)) {
            $response .= $str;
            if (substr($str, 3, 1) == " ") break;
        }
        return $response;
    };

    $send = function($cmd) use ($socket, $read) {
        fputs($socket, $cmd . "\r\n");
        return $read();
    };

    // Kezdő üzenet olvasása
    $read();

    $send("EHLO " . gethostname());
    
    $resAuth = $send("AUTH LOGIN");
    if (substr($resAuth, 0, 3) != '334') {
        fclose($socket);
        return "SMTP Auth hiba: " . $resAuth;
    }

    $send(base64_encode($user));
    $resPass = $send(base64_encode($pass));
    if (substr($resPass, 0, 3) != '235') {
        fclose($socket);
        return "Hibás SMTP felhasználónév vagy jelszó!";
    }

    $send("MAIL FROM: <{$from}>");
    $send("RCPT TO: <{$to}>");
    
    $resData = $send("DATA");
    if (substr($resData, 0, 3) != '354') {
        fclose($socket);
        return "SMTP Hiba a DATA parancs közben: " . $resData;
    }

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Weboldal <{$from}>\r\n";
    $headers .= "Reply-To: {$replyTo}\r\n";
    $headers .= "To: {$to}\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";

    $emailData = $headers . "\r\n\r\n" . $htmlBody . "\r\n.";
    $resSend = $send($emailData);

    $send("QUIT");
    fclose($socket);

    if (substr($resSend, 0, 3) == '250') {
        return true;
    } else {
        return "Sikertelen levélküldés a szervertől: " . $resSend;
    }
}

// Küldés futtatása
$result = sendSimpleSmtp($smtpHost, $smtpPort, $smtpUser, $smtpPass, $smtpUser, $címzettEmail, $email, $targy, $uzenetBody);

if ($result === true) {
    echo json_encode(["success" => true, "message" => "Az üzenet sikeresen elküldve!"]);
} else {
    echo json_encode(["success" => false, "message" => $result]);
}
?>