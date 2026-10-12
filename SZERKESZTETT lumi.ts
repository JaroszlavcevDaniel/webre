import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// --- TELJES, HIÁNYTALAN KULCSSZÓ TÖMBÖK ---

const GREETINGS = [
  'szia', 'sziatok', 'sziasztok', 'helló', 'hello', 'helo', 'csá', 'csao', 'csáó',
  'cső', 'csövi', 'hali', 'halihó', 'szervusz', 'szervusztok', 'üdv', 'üdvözlöm',
  'üdvözlök', 'tiszteletem', 'kezicsókolom', 'jó napot', 'jónapot', 'jó reggelt',
  'jó estét', 'szép napot', 'szevasz', 'szio', 'szió', 'üdvözlet', 'üdvözöllek',
  'szia szia', 'hello hello', 'csá csá', 'üdvözletem', 'szép napot kívánok',
  'jó napot kívánok', 'jó reggelt kívánok', 'jó estét kívánok', 'csőváz',
  'csövi cső', 'csókolom', 'puszi', 'puszika', 'szevasztok', 'servus', 'servustok',
  'hi', 'hey', 'helloo', 'hellooo', 'heló', 'heloo', 'helóka', 'halika', 'halikaa',
  'szijja', 'szijjaa', 'szija', 'szijjasztok', 'szióka', 'sziókám', 'jo napot',
  'jo reggelt', 'jo estet', 'szep napot', 'jo napot kivanok', 'jo reggelt kivanok',
  'jo estet kivanok', 'szep napot kivanok', 'üdvözletem ', 'udv', 'udvözlet',
  'udvozlök', 'udvozlem', 'udvozollek', 'sziaa', 'sziaaa', 'helloo', 'helloooo',
  'szervusztok ', 'kezicsokolom', 'tiszteletem ', 'jo reggelt ', 'jo estet ',
  'szep napot ', 'szevasz ', 'szevasztok ', 'szio ', 'sziooo', 'szióóó', 'haliho',
  'halihóóó', 'csáóóó', 'csaooo', 'csőöö', 'csooo', 'heloka', 'halikaaa', 'szijjaaa',
  'sziokam', 'szioka', 'szija', 'szijjasztok ', 'jónapot kívánok', 'jónapot kivanok',
  'jó napot ', 'jó reggelt ', 'jó estét ', 'szép napot ', 'kezicsókolom ',
  'tiszteletem ', 'üdvözlök ', 'üdvözlöm ', 'üdvözlet ', 'üdvözöllek ', 'szervusz ',
  'szervusztok ', 'csá ', 'csao ', 'csáó ', 'cső ', 'csövi ', 'hali ', 'halihó ',
  'szevasz ', 'szevasztok ', 'szio ', 'szió ', 'puszi ', 'puszika ', 'servus ',
  'servustok ', 'hi ', 'hey ', 'heló ', 'helóka ', 'halika ', 'szijja ', 'szióka ',
  'sziókám ', 'csókolom '
];

const THANKS = [
   'köszönöm', 'köszönömöt', 'köszönömbe', 'köszönömben', 'köszönömre', 'köszönömkel',
    'köszi', 'köszit', 'kőszi', 'köszibe', 'kösziben', 'köszire', 'kösziért', 'köszihel',
    'köszönöm szépen', 'köszönöm szépenek', 'köszönöm szépenbe', 'köszönöm szépenben',
    'ezer hála', 'ezer hálát', 'ezer hálába', 'ezer hálában', 'ezer hálára', 'ezer hálával', 'ezer hálaért',
    'köszi szépen', 'köszi szépnek', 'köszi szépenbe', 'köszi szépenben', 'köszi szépnapra',
    'hálás köszönöm', 'hálás köszönömöt', 'hálás köszönömbe', 'hálás köszönömben', 'hálás köszönömre',
    'köszönjük', 'köszönjüköt', 'köszönjükbe', 'köszönjükben', 'köszönjükre', 'köszönjükkel',
    'köszönjük szépen', 'köszönjük szépenek', 'köszönjük szépenbe', 'köszönjük szépenben',
    'kösz', 'köszt', 'kősz', 'köszbe', 'köszben', 'köszre', 'kösszel',
    'thx', 'thxt', 'thx-et', 'thx-be', 'thx-ben', 'thx-szel',
    'köszike', 'köszikét', 'köszikébe', 'köszikében', 'köszikére', 'köszikével',
    'nagyon köszönöm', 'nagyon köszönömöt', 'nagyon köszönömbe', 'nagyon köszönömben',
    'köszönöm a segítséget', 'köszönöm a segítségémet', 'köszönöm a segitséget', 'köszönöm a segítséged', 'köszönöm a segítségért',
    'köszönöm a választ', 'köszönöm a válaszkát', 'köszönöm a válaszomat', 'köszönöm a válaszért', 'köszönöm a válaszokat',
    'köszönöm szépen a tájékoztatást', 'köszönöm szépen a tájékoztatástok', 'köszönöm szépen a tájékoztatási', 'köszönöm szépen a tájékoztatásért',
    'köszönet', 'köszönetet', 'köszönetbe', 'köszönetben', 'köszönetes', 'köszönetre', 'köszönettel', 'köszönetért',
    'tiszteletem', 'tiszteletemet', 'tiszteletemben', 'tisztelettel', 'tiszteletemért',
    'köszönöm a fáradozásodat', 'köszönöm a fáradozásotokat', 'köszönöm a fáradozásomat', 'köszönöm a fáradozásért'
];

const LANDING_KEYWORDS = [
  'landing page', 'landing paget', 'landing page-t', 'landing page-ek', 'landing page-eket', 'landing page-ben', 'landing page-re',
    'landingpage', 'landingpaget', 'landingpage-t', 'landingpagek', 'landingpageket', 'landingpageben', 'landingpagere',
    'landing', 'landinget', 'landingben', 'landingre', 'landingek', 'landingeket',
    'lending', 'lendinget', 'lendingben', 'lendingre', 'lendingek', 'lendingeket',
    'egyoldalas weboldal', 'egyoldalas weboldalt', 'egyoldalas weboldalakat', 'egyoldalas weboldalban', 'egyoldalas weboldalra',
    'egyoldalas honlap', 'egyoldalas honlapot', 'egyoldalas honlapokat', 'egyoldalas honlapban', 'egyoldalas honlapra',
    'egy oldalas weboldal', 'egy oldalas weboldalt', 'egy oldalas weboldalakat', 'egy oldalas weboldalban', 'egy oldalas weboldalra',
    'egy oldalas honlap', 'egy oldalas honlapot', 'egy oldalas honlapokat', 'egy oldalas honlapban', 'egy oldalas honlapra',
    'landing oldal', 'landing oldalt', 'landing oldalak', 'landing oldalakat', 'landing oldalban', 'landing oldalra',
    'nyitóoldal', 'nyitóoldalt', 'nyitóoldalak', 'nyitóoldalakat', 'nyitóoldalban', 'nyitóoldalra',
    'kezdőoldal', 'kezdőoldalt', 'kezdőoldalak', 'kezdőoldalakat', 'kezdőoldalban', 'kezdőoldalra',
    'bemutatkozó oldal', 'bemutatkozó oldalt', 'bemutatkozó oldalak', 'bemutatkozó oldalakat', 'bemutatkozó oldalban', 'bemutatkozó oldalra',
    'single page', 'single paget', 'single page-t', 'single pages',
    'one-page site', 'one-page sitet', 'one-page site-ot', 'one-page sites',
    'egyablakos oldal', 'egyablakos oldalt', 'egyablakos oldalak', 'egyablakos oldalakat', 'egyablakos oldalban', 'egyablakos oldalra',
    'promo oldal', 'promo oldalt', 'promo oldalak', 'promo oldalakat', 'promo oldalban', 'promo oldalra',
    'kampányoldal', 'kampányoldalt', 'kampányoldalak', 'kampányoldalakat', 'kampányoldalban', 'kampányoldalra',
    'sales page', 'sales paget', 'sales page-t', 'sales pages',
    'értékesítési oldal', 'értékesítési oldalt', 'értékesítési oldalak', 'értékesítési oldalakat', 'értékesítési oldalban', 'értékesítési oldalra',
    'portfólió', 'portfóliót', 'portfóliók', 'portfóliókat', 'portfólióban', 'portfólióra'
];

const SERVER_WEBPAGE_KEYWORDS = [
  'többoldalas weboldal', 'többoldalas weboldalt', 'többoldalas weboldalak', 'többoldalas weboldalakat', 'többoldalas weboldalban', 'többoldalas weboldalra',
    'többoldalas honlap', 'többoldalas honlapot', 'többoldalas honlapok', 'többoldalas honlapokat', 'többoldalas honlapban', 'többoldalas honlapra',
    'több oldalas', 'több oldalasat', 'több oldalasak', 'több oldalos', 'több oldolosat', 'többoldalas', 'többoldalasat',
    'komplex weboldal', 'komplex weboldalt', 'komplex weboldalak', 'komplex weboldalakat', 'komplex weboldalban', 'komplex weboldalra',
    'nagyméretű weboldal', 'nagyméretű weboldalt', 'nagyméretű weboldalak', 'nagyméretű weboldalakat', 'nagyméretű weboldalban',
    'fejlett weboldal', 'fejlett weboldalt', 'fejlett weboldalak', 'fejlett weboldalakat',
    'fejlettebb weboldal', 'fejlettebb weboldalt', 'fejlettebb weboldalak', 'fejlettebb weboldalakat',
    'vállalati weboldal', 'vállalati weboldalt', 'vállalati weboldalak', 'vállalati weboldalakat', 'vállalati weboldalban',
    'corporate website', 'corporate websitet', 'corporate websites',
    'vállalati', 'vállalatiak', 'vállalatinak', 'vállalatis',
    'portál', 'portált', 'portálok', 'portálokat', 'portálban', 'portálra', 'portálos',
    'webportál', 'webportált', 'webportálok', 'webportálokat', 'webportálban', 'webportálra',
    'backend', 'backendet', 'backendek', 'backendeket', 'backendben', 'backendre', 'backendes',
    'szerveroldali', 'szerveroldalit', 'szerveroldaliak', 'szerveroldaliban', 'szerveroldalira',
    'dinamikus weboldal', 'dinamikus weboldalt', 'dinamikus weboldalak', 'dinamikus weboldalakat', 'dinamikus weboldalban',
    'webalkalmazás', 'webalkalmazást', 'webalkalmazások', 'webalkalmazásokat', 'webalkalmazásban', 'webalkalmazásra',
    'web app', 'web appot', 'web appok', 'web appokat', 'web appban', 'web appra',
    'full-stack', 'full-stackes', 'full-stackek', 'full-stackesek',
    'szerver', 'szervert', 'szerverek', 'szervereket', 'szerverben', 'szerverre', 'szerveres',
    'cms', 'cmst', 'cms-t', 'cmsek', 'cmseket', 'cmsben', 'cmses',
    'tartalomkezelő', 'tartalomkezelőt', 'tartalomkezelők', 'tartalomkezelőket', 'tartalomkezelőben', 'tartalomkezelőre',
    'adatbázis-alapú weboldal', 'adatbázis-alapú weboldalt', 'adatbázis-alapú weboldalak', 'adatbázis-alapú weboldalakat', 'adatbázis-alapú weboldalban',
    'admin felület', 'admin felületet', 'admin felületek', 'admin felületeket', 'admin felületen', 'admin felületre',
    'backend rendszer', 'backend rendszert', 'backend rendszerek', 'backend rendszereket', 'backend rendszerben',
    'admin', 'admint', 'adminok', 'adminokat', 'adminban', 'adminra', 'adminos',
    'panel', 'panelt', 'panelek', 'paneleket', 'panelben', 'panelre', ' paneles',
    'raktár', 'raktárt', 'raktárak', 'raktárakat', 'raktárban', 'raktárra', 'raktáros',
    'raktárkészlet', 'raktárkészletet', 'raktárkészletek', 'raktárkészleteket', 'raktárkészleten', 'raktárkészletre',
    'raktárkezelés', 'raktárkezelést', 'raktárkezelések', 'raktárkezeléseket', 'raktárkezelésben', 'raktárkezelésre'
];

const WEBSHOP_KEYWORDS = [
  'webshop', 'webáruház', 'online bolt', 'e-commerce', 'webaruhaz', 'ebolt',
  'e-bolt', 'webshopot', 'webáruházat', 'webaruhazat', 'online áruház',
  'online aruhaz', 'webáruház készítés', 'webaruhaz keszites', 'webshop készítés',
  'webshop keszites', 'értékesítés online', 'ertekesites online', 'termékeladás',
  'termekeladas', 'webáruház fejlesztés', 'webaruhaz fejlesztes'
];

const TIME_KEYWORDS = [
   'határidő', 'határidőt', 'határidők', 'határidőket', 'határidőben', 'határidőre', 'határidős',
    'deadline', 'deadlinet', 'deadline-t', 'deadlines', 'deadlinera', 'deadlineban',
    'határidőcske', 'határidőcskét', 'határidőcskébe', 'határidőcskére',
    'határideje', 'határidejét', 'határidejének', 'határidejében', 'határidejére',
    'végső határidő', 'végső határidőt', 'végső határidők', 'végső határidőre', 'végső határidőben',
    'leadási határidő', 'leadási határidőt', 'leadási határidők', 'leadási határidőre',
    'beadási határidő', 'beadási határidőt', 'beadási határidők', 'beadási határidőre',
    'céldátum', 'céldátumot', 'céldátumok', 'céldátumokat', 'céldátumban', 'céldátumra',
    'idő', 'időt', 'idők', 'időket', 'időben', 'időre',
    'időpont', 'időpontot', 'időpontok', 'időpontokat', 'időpontban', 'időpontra',
    'időtartam', 'időtartamot', 'időtartamok', 'időtartamokat', 'időtartamban', 'időtartamra',
    'időkeret', 'időkeretet', 'időkeretek', 'időkereteket', 'időkeretben', 'időkeretre',
    'időtúllépés', 'időtúllépést', 'időtúllépések', 'időtúllépésben',
    'kifutási idő', 'kifutási időt', 'kifutási időben', 'kifutási időre',
    'időhatár', 'időhatárt', 'időhatárok', 'időhatárokat', 'időhatárban', 'időhatárra',
    'limit', 'limitet', 'limitek', 'limiteket', 'limitben', 'limitre',
    'időlimitek', 'időlimiteket', 'időlimitekben',
    'határidő lejárta', 'határidő lejártát', 'határidő lejárst',
    'határidőn túl', 'határidőn túli',
    'ütemterv', 'ütemtervet', 'ütemtervek', 'ütemterveket', 'ütemtervben', 'ütemtervre',
    'időzítés', 'időzítést', 'időzítések', 'időzítéseket', 'időzítésben', 'időzítésre',
    'időbeosztás', 'időbeosztást', 'időbeosztások', 'időbeosztásokat', 'időbeosztásban', 'időbeosztásra',
    'azonnali', 'azonnalit', 'azonnyal', 'azonnaliak',
    'sürgős', 'sürgőset', 'sürgősek', 'sürgőseket', 'sürgősebben',
    'meddig', 'mikor', 'mikorra',
    'gyorsan', 'sürgősen',
    'sos', 'sost', 's.o.s.', 's.o.s.-t',
    'kapacitás', 'kapacitást', 'kapacitások', 'kapacitásokat', 'kapacitásban', 'kapacitásra',
    'kapacitása', 'kapacitását', 'kapacitásának', 'kapacitásában'
];

const MONEY_KEYWORDS = [
  'mennyibe kerül', 'mennyibe kerülnek', 'mennyibe fog', 'mennyibe fognak', 'mibe kerül', 'mibe kerülnek',
    'kerül', 'kerülbe', 'kerülni', 'mennyiért', 'mennyit kérsz', 'mennyit kérnél', 'mennyibe van',
    'ár', 'ára', 'árak', 'árát', 'árat', 'árakat', 'árban', 'árra', 'áras', 'árcédula', 'árcédulát', 'árcédulák',
    'összeg', 'összeget', 'összegek', 'összegeket', 'összegetek', 'összegben', 'összegre', 'összegét',
    'pénz', 'pénzt', 'pénzek', 'pénzeket', 'pénzben', 'pénzre', 'pénze', 'pénzösszeg', 'pénzösszeget',
    'költség', 'költésget', 'költséget', 'költségek', 'költségeket', 'költségben', 'költségre',
    'költségvonzat', 'költségvonzatot', 'költségvonzatok',
    'költségvetés', 'költségvetést', 'költségvetések', 'költségvetésben', 'költségvetésre',
    'büdzsé', 'büdzsét', 'büdzsék', 'büdzséket', 'büdzsében', 'büdzsére',
    'fizetendő', 'fizetendők', 'fizetendőt',
    'díj', 'díjat', 'díjak', 'díjakat', 'díjban', 'díjra', 'díjas',
    'díjazás', 'díjazást', 'díjazások', 'díjazásban',
    'tarifa', 'tarifát', 'tarifák', 'tarifákat', 'tarifában', 'tarifára',
    'honorárium', 'honoráriumot', 'honoráriumok', 'honoráriumban',
    'fizetség', 'fizetséget', 'fizetségben',
    'befektetés', 'befektetést', 'befektetések', 'befektetéseket', 'befektetésben', 'befektetésre',
    'finanszírozás', 'finanszírozást', 'finanszírozások', 'finanszírozásban',
    'bevétel', 'bevételt', 'bevételek', 'bevételeket', 'bevételben',
    'kiadás', 'kiadást', 'kiadások', 'kiadásokat', 'kiadásban',
    'tőke', 'tőkét', 'tőkék', 'tőkében', 'tőkére',
    'valuta', 'valutát', 'valuták', 'valutákat', 'valutában', 'valutára',
    'forint', 'forintot', 'forintok', 'forintokat', 'forintban', 'forintra',
    'euró', 'eurót', 'eurók', 'eurókat', 'euróban', 'euróra',
    'árfolyam', 'árfolyamot', 'árfolyamok', 'árfolyamokat', 'árfolyamban', 'árfolyamra',
    'kavics', 'kavicsot', 'kavicsok', 'kavicsokat', 'kavicsban',
    'gempa', 'gempát', 'gempák', 'gempában',
    'zseton', 'zsetont', 'zsetonok', 'zsetonokat', 'zsetonban', 'zsetonra'
];

const PROCESS_KEYWORDS = [
  'folyamat', 'folyamatot', 'folyamatok', 'folyamatokat', 'folyamatban', 'folyamatra', 'folyamatos',
    'munkafolyamat', 'munkafolyamatot', 'munkafolyamatok', 'munkafolyamatokat', 'munkafolyamatban', 'munkafolyamatra',
    'workflow', 'workflowt', 'workflow-t', 'workflowk', 'workflowkat', 'workflowban', 'workflowra',
    'menet', 'menetet', 'menetek', 'meneteket', 'menetben', 'menetre',
    'menetrend', 'menetrendet', 'menetrendek', 'menetrendeket', 'menetrendben', 'menetrendre',
    'ügymenet', 'ügymenetet', 'ügymenetek', 'ügymeneteket', 'ügymenetben', 'ügymenetre',
    'folyamatábra', 'folyamatábrát', 'folyamatábrák', 'folyamatábrákat', 'folyamatábrában', 'folyamatábrára',
    'együttműködés', 'együttműködést', 'együttműködések', 'együttműködéseket', 'együttműködésben', 'együttműködésre',
    'kooperáció', 'kooperációt', 'kooperációk', 'kooperációkat', 'kooperációban', 'kooperációra',
    'partnerség', 'partnerséget', 'partnerségek', 'partnerségeket', 'partnerségben', 'partnerségre',
    'közös munka', 'közös munkát', 'közös munkák', 'közös munkákat', 'közös munkában', 'közös munkára',
    'szinergia', 'szinergiát', 'szinergiák', 'szinergiákat', 'szinergiában', 'szinergiára',
    'részvétel', 'részvételt', 'részvételek', 'részvételeket', 'részvételben', 'részvételre',
    'munka', 'munkát', 'munkák', 'munkákat', 'munkában', 'munkára', 'munkás',
    'feladat', 'feladatot', 'feladatok', 'feladatokat', 'feladatban', 'feladatra', 'feladatos',
    'projekt', 'projektet', 'projektek', 'projekteket', 'projektben', 'projektre', 'projektes',
    'projektmenedzsment', 'projektmenedzsmentet', 'projektmenedzsmentek', 'projektmenedzsmentben', 'projektmenedzsmentre',
    'teendők', 'teendőket', 'teendőkben', 'teendő', 'teendőt',
    'feladatkör', 'feladatkört', 'feladatkörök', 'feladatköröket', 'feladatkörben', 'feladatkörre',
    'lépések', 'lépéseket', 'lépésekben', 'lépés', 'lépést', 'lépésre', 'lépésben',
    'fázisok', 'fázisokat', 'fázisokban', 'fázis', 'fázist', 'fázisba', 'fázisban', 'fázisra',
    'mérföldkövek', 'mérföldköveket', 'mérföldkövekben', 'mérföldkő', 'mérföldkövet', 'mérföldkőhöz',
    'módszertan', 'módszertant', 'módszertanok', 'módszertanokat', 'módszertanban', 'módszertanra',
    'metodika', 'metodikát', 'metodikák', 'metodikákat', 'metodikában', 'metodikára',
    'dolgozol', 'dolgoztok', 'dolgoznak', 'dolgozna', 'dolgoznál',
    'dolgozunk', 'dolgozhatunk', 'dolgoztunk', 'dolgozni'
];

const CMS_KEYWORDS = [
   'cms', 'cmst', 'cms-t', 'cmsek', 'cmseket', 'cmsben', 'cmsre', 'cmses',
    'tartalomkezelő', 'tartalomkezelőt', 'tartalomkezelők', 'tartalomkezelőket', 'tartalomkezelőben', 'tartalomkezelőre', 'tartalomkezelős',
    'content management system', 'content management systemt', 'content management system-et', 'content management systemek', 'content management systemeket',
    'tartalomkezelő rendszer', 'tartalomkezelő rendszert', 'tartalomkezelő rendszerek', 'tartalomkezelő rendszereket', 'tartalomkezelő rendszerben', 'tartalomkezelő rendszerre',
    'wordpress', 'wordpresst', 'wordpress-t', 'wordpressben', 'wordpressre', 'wordpresses',
    'elementor', 'elementort', 'elementor-t', 'elementorban', 'elementorra', 'elementoros',
    'drupal', 'drupalit', 'drupal-t', 'drupalban', 'drupalra', 'drupalos',
    'joomla', 'joomlat', 'joomla-t', 'joomlaban', 'joomlara', 'joomlás',
    'shoprenter', 'shoprentert', 'shoprenter-t', 'shoprenterben', 'shoprenterre', 'shoprenteres',
    'shopify', 'shopifyt', 'shopify-t', 'shopifyban', 'shopifyra', 'shopifyos',
    'woocommerce', 'woocommercet', 'woocommerce-t', 'woocommerceban', 'woocommerce-re', 'woocommerce-es',
    'magento', 'magentot', 'magento-t', 'magentoban', 'magentora', 'magentos',
    'prestashop', 'prestashopt', 'prestashop-t', 'prestashopban', 'prestashopra', 'prestashopes',
    'wix', 'wixt', 'wix-et', 'wixben', 'wixre', 'wixes',
    'squarespace', 'squarespacet', 'squarespace-t', 'squarespaceben', 'squarespacere', 'squarespaces',
    'bitrix', 'bitrixt', 'bitrix-et', 'bitrixben', 'bitrixre', 'bitrixes'
];

const INVOICE_KEYWORDS = [
      'számla', 'számlát', 'számlák', 'számlákat', 'számlában', 'számlára', 'számlás',
    'számlaképes', 'számlaképeset', 'számlaképesek', 'számlaképesség',
    'számlázás', 'számlázást', 'számlázások', 'számlázásban', 'számlázásra',
    'számlakibocsátás', 'számlakibocsátást', 'számlakibocsátások', 'számlakibocsátásban',
    'invoice', 'invoicet', 'invoice-t', 'invoices', 'invoice-ok', 'invoice-ban',
    'csekk', 'csekket', 'csekkek', 'csekkeket', 'csekkben', 'csekkre', 'csekkel',
    'nyugta', 'nyugtát', 'nyugták', 'nyugtákat', 'nyugtában', 'nyugtára',
    'bizonylat', 'bizonylatot', 'bizonylatok', 'bizonylatokat', 'bizonylatban', 'bizonylatra',
    'pénztárgép', 'pénztárgépet', 'pénztárgépek', 'pénztárgépeket', 'pénztárgépben', 'pénztárgépre',
    'pénzügyi bizonylat', 'pénzügyi bizonylatot', 'pénzügyi bizonylatok', 'pénzügyi bizonylatokat',
    'befizetési bizonylat', 'befizetési bizonylatot', 'befizetési bizonylatok',
    'számvitel', 'számvitelt', 'számvitelben', 'számviteli',
    'számlatömb', 'számlatömböt', 'számlatömbök', 'számlatömböket', 'számlatömbben',
    'számlázó', 'számlázót', 'számlázók', 'számlázókat', 'számlázóban', 'számlázóra',
    'számlázóprogram', 'számlázóprogramot', 'számlázóprogramok', 'számlázóprogramokat', 'számlázóprogramban',
    'elektronikus számla', 'elektronikus számlát', 'elektronikus számlák', 'elektronikus számlákat', 'elektronikus számlában',
    'e-számla', 'e-számlát', 'e-számlák', 'e-számlákat', 'e-számlában', 'e-számlára',
    'online számla', 'online számlát', 'online számlák', 'online számlákat', 'online számlában',
    'számlázási adatok', 'számlázási adatokat', 'számlázási adatokban', 'számlázási adatokra',
    'adószám', 'adószámot', 'adószámok', 'adószámokat', 'adószámban', 'adószámra', 'adószámos',
    'céges számla', 'céges számlát', 'céges számlák', 'céges számlákat', 'céges számlában',
    'költségszámla', 'költségszámlát', 'költségszámlák', 'költségszámlákat', 'költségszámlában',
    'átutalási megbízás', 'átutalási megbízást', 'átutalási megbízások', 'átutalási megbízásokat', 'átutalási megbízásban',
    'fizetési felszólítás', 'fizetési felszólítást', 'fizetési felszólítások', 'fizetési felszólításokat', 'fizetési felszólításban',
    'díjbekérő', 'díjbekérőt', 'díjbekérők', 'díjbekérőket', 'díjbekérőben', 'díjbekérőre',
    'proforma', 'proformat', 'proforma-t', 'proformák', 'proformákat', 'proformában',
    'proforma számla', 'proforma számlát', 'proforma számlák', 'proforma számlákat',
    'számlakivonat', 'számlakivonatot', 'számlakivonatok', 'számlakivonatokkal', 'számlakivonatban',
    'bankkivonat', 'bankkivonatot', 'bankkivonatok', 'bankkivonatokkal', 'bankkivonatban', 'bankkivonatra',
    'illeték', 'illetéket', 'illetékek', 'illetékeket', 'illetékben', 'illetékre', 'illetékes'
];

const SECURITY_KEYWORDS = [
   'biztonság', 'biztonságot', 'biztonságok', 'biztonságos', 'biztonságban', 'biztonságra', 'biztonsága',
    'webbiztonság', 'webbiztonságot', 'webbiztonságban', 'webbiztonságra',
    'web védelem', 'web védelmet', 'web védelmek', 'web védelemben', 'web védelemre',
    'védelem', 'védelmet', 'védelmek', 'védelemben', 'védelemre',
    'cybersecurity', 'cybersecurityt', 'cybersecurity-t', 'cybersecurityben', 'cybersecurityre',
    'kiberbiztonság', 'kiberbiztonságot', 'kiberbiztonságban', 'kiberbiztonságra',
    'adatvédelem', 'adatvédelmet', 'adatvédelemben', 'adatvédelemre', 'adatvédelmi',
    'adatbiztonság', 'adatbiztonságot', 'adatbiztonságban', 'adatbiztonságra',
    'titkosítás', 'titkosítást', 'titkosítások', 'titkosításokat', 'titkosításban', 'titkosításra',
    'ssl', 'sslt', 'ssl-t', 'ssl-ben', 'ssl-re', 'ssl-es',
    'tanúsítvány', 'tanúsítványt', 'tanúsítványok', 'tanúsítványokat', 'tanúsítványban', 'tanúsítványra', 'tanúsítványos',
    'tűzfal', 'tűzfalat', 'tűzfalak', 'tűzfalakat', 'tűzfalban', 'tűzfalra', 'tűzfalas',
    'firewall', 'firewallt', 'firewall-t', 'firewallok', 'firewallokat', 'firewallban', 'firewallra',
    'behatolásvédelem', 'behatolásvédelmet', 'behatolásvédelemben', 'behatolásvédelemre',
    'biztonságos kapcsolat', 'biztonságos kapcsolatot', 'biztonságos kapcsolatok', 'biztonságos kapcsolatban', 'biztonságos kapcsolatra',
    'biztonsági mentés', 'biztonsági mentést', 'biztonsági mentések', 'biztonsági mentéseket', 'biztonsági mentésben', 'biztonsági mentésre',
    'backup', 'backupt', 'backup-ot', 'backupok', 'backupokat', 'backupban', 'backupra',
    'jelszó', 'jelszót', 'jelszavak', 'jelszavakat', 'jelszóban', 'jelszóra', 'jelszavas', 'jelszava',
    'hitelesítés', 'hitelesítést', 'hitelesítések', 'hitelesítéseket', 'hitelesítésben', 'hitelesítésre',
    'kétlépcsős azonosítás', 'kétlépcsős azonosítást', 'kétlépcsős azonosításban', 'kétlépcsős azonosításra',
    '2fa', '2fat', '2fa-t', '2fa-ban', '2fa-ra',
    'jogosultságkezelés', 'jogosultságkezelést', 'jogosultságkezelések', 'jogosultságkezelésben', 'jogosultságkezelésre',
    'vírusvédelem', 'vírusvédelmet', 'vírusvédelemben', 'vírusvédelemre',
    'kártevőirtás', 'kártevőirtást', 'kártevőirtásban', 'kártevőirtásra',
    'spamszűrés', 'spamszűrést', 'spamszűrésben', 'spamszűrésre',
    'biztonsági audit', 'biztonsági auditot', 'biztonsági auditok', 'biztonsági auditokat', 'biztonsági auditban', 'biztonsági auditra'
];

const SEO_KEYWORDS = [
  'seo', 'seot', 'seo-t', 'seos', 'seoban', 'seora', 'seós',
    'keresőoptimalizálás', 'keresőoptimalizálást', 'keresőoptimalizálások', 'keresőoptimalizálásban', 'keresőoptimalizálásra', 'keresőoptimalizált',
    'marketing', 'marketinget', 'marketinges', 'marketingben', 'marketingre',
    'online marketing', 'online marketinget', 'online marketingben', 'online marketingre',
    'digitális marketing', 'digitális marketinget', 'digitális marketingben', 'digitális marketingre',
    'keresőmarketing', 'keresőmarketinget', 'keresőmarketingben', 'keresőmarketingre',
    'sem', 'semt', 'sem-et', 'semmel', 'semben', 'semre',
    'hirdetés', 'hirdetést', 'hirdetések', 'hirdetéseket', 'hirdetésben', 'hirdetésre', 'hirdetéses',
    'kampány', 'kampányt', 'kampányok', 'kampányokat', 'kampányban', 'kampányra', 'kampányos',
    'reklám', 'reklámot', 'reklámok', 'reklámokat', 'reklámban', 'reklámra', 'reklámos',
    'tartalomgyártás', 'tartalomgyártást', 'tartalomgyártások', 'tartalomgyártásban', 'tartalomgyártásra',
    'content marketing', 'content marketinget', 'content marketingben', 'content marketingre',
    'közösségi média', 'közösségi médiát', 'közösségi médiában', 'közösségi médiára',
    'social media', 'social mediat', 'social media-t', 'social mediában', 'social mediára',
    'márkaépítés', 'márkaépítést', 'márkaépítések', 'márkaépítésben', 'márkaépítésre',
    'branding', 'brandingt', 'branding-et', 'brandingben', 'brandingre', 'brandes',
    'látogatottság', 'látogatottságot', 'látogatottságok', 'látogatottságban', 'látogatottságra',
    'forgalom', 'forgalmat', 'forgalmak', 'forgalmakat', 'forgalomban', 'forgalomra', 'forgalmas',
    'konverzió', 'konverziót', 'konverziók', 'konverziókat', 'konverzióban', 'konverzióra',
    'konverziós arány', 'konverziós arányt', 'konverziós arányok', 'konverziós arányban', 'konverziós arányra',
    'kulcsszó', 'kulcsszót', 'kulcsszavak', 'kulcsszavakat', 'kulcsszóban', 'kulcsszóra', 'kulcsszavas',
    'linképítés', 'linképítést', 'linképítések', 'linképítésben', 'linképítésre',
    'backlink', 'backlinket', 'backlinkek', 'backlinkeket', 'backlinkben', 'backlinkre',
    'elemzés', 'elemzést', 'elemzések', 'elemzéseket', 'elemzésben', 'elemzésre',
    'analitika', 'analitikát', 'analitikák', 'analitikákat', 'analitikában', 'analitikára',
    'célközönség', 'célközönséget', 'célközönségek', 'célközönségben', 'célközönségre',
    'célcsoport', 'célcsoportot', 'célcsoportok', 'célcsoportokat', 'célcsoportban', 'célcsoportra',
    'hírlevél', 'hírlevelet', 'hírlevelek', 'hírleveleket', 'hírlevélben', 'hírlevélre',
    'email marketing', 'email marketinget', 'email marketingben', 'email marketingre'
];

const LOGIN_KEYWORDS = [
  
    'login', 'logint', 'login-t', 'loginok', 'loginba', 'loginra', 'logines',
    'bejelentkezés', 'bejelentkezést', 'bejelentkezések', 'bejelentkezéseket', 'bejelentkezésben', 'bejelentkezésre',
    'belépés', 'belépést', 'belépések', 'belépéseket', 'belépésben', 'belépésre',
    'sign in', 'sign int', 'sign in-t', 'sign inek', 'sign inben',
    'signin', 'signint', 'signin-t', 'signinek', 'signinben',
    'autentikáció', 'autentikációt', 'autentikációk', 'autentikációkat', 'autentikációban', 'autentikációra',
    'azonosítás', 'azonosítást', 'azonosítások', 'azonosításokat', 'azonosításban', 'azonosításra',

    'fiók', 'fiókot', 'fiókok', 'fiókokat', 'fiókban', 'fiókra', 'fiókos', 'fiókom',
    'profil', 'profilt', 'profilok', 'profilokat', 'profilban', 'profilra', 'profilos',
  
    'regisztráció', 'regisztrációt', 'regisztrációk', 'regisztrációkat', 'regisztrációban', 'regisztrációra', 'regisztrációs',
    'regisztrálás', 'regisztrálást', 'regisztrálások', 'regisztrálásban', 'regisztrálásra',
    'sign up', 'sign upt', 'sign up-ot', 'sign upek', 'sign upban',
    'signup', 'signupt', 'signup-ot', 'signupek', 'signupban',
    'fiók létrehozása', 'fiók létrehozását', 'fiók létrehozásában', 'fiók létrehozására',
 
    'jelszóemlékeztető', 'jelszóemlékeztetőt', 'jelszóemlékeztetők', 'jelszóemlékeztetőben',
    'elfelejtett jelszó', 'elfelejtett jelszót', 'elfelejtett jelszavak', 'elfelejtett jelszóban',
  
    'kilépés', 'kilépést', 'kilépések', 'kilépésben', 'kilépésre',
    'kijelentkezés', 'kijelentkezést', 'kijelentkezések', 'kijelentkezésben', 'kijelentkezésre',
    'logout', 'logoutot', 'logout-ot', 'logoutok', 'logoutban', 'logoutra',
    'sign out', 'sign outot', 'sign out-ot', 'sign outok', 'sign outban',
 
    'felhasználónév', 'felhasználónevet', 'felhasználónevek', 'felhasználóneveket', 'felhasználónévben', 'felhasználónévre',
    'user', 'usert', 'user-t', 'userék', 'user-ek', 'userben', 'userre', 'useres',
    'user id', 'user idt', 'user id-t', 'user idek', 'user id-ban',
    'hozzáférés', 'hozzáférést', 'hozzáférések', 'hozzáféréseket', 'hozzáférésben', 'hozzáférésre', 'hozzáférési',
    'engedély', 'engedélyt', 'engedélyek', 'engedélyeket', 'engedélyben', 'engedélyre', 'engedélyes'
];

const BYE_KEYWORDS = [
   'viszlát', 'viszlátot', 'viszlátok', 'viszlátokat', 'viszlátban', 'viszlátra', 'viszlátka', 'viszlátkát',
    'viszontlátásra', 'viszontlátások', 'viszontlátásra-t',
    'bá', 'bát', 'bák', 'bá-bá', 'bátok',
    'pa-pa', 'pa-pat', 'pa-pák', 'pa-pában',
    'papa', 'papát', 'papák', 'papákat', 'papában', 'papára',
    'pá', 'pát', 'pák', 'pában', 'pára', 'pá-pá', 'pápá', 'pápát',
    'kellemes napot', 'kellemes napotok', 'kellemes napokat', 'kellemes napotokban',
    'szép napot', 'szép napotok', 'szép napokat', 'szép napotokban',
    'szép estét', 'szép estétek', 'szép estéket', 'szép estétekben',
    'jó éjt', 'jó éjtet', 'jó éjek', 'jó éjeket',
    'jó éjszakát', 'jó éjszakák', 'jó éjszakákat', 'jó éjszakában',
    'bye', 'byet', 'bye-t', 'byek', 'bye-ban', 'byera', 'byes',
    'see you', 'see you-t', 'see youk', 'see you-ban',
    'minden jót', 'minden jókat', 'minden jónak', 'minden jóban',
    'vigyázz magadra', 'vigyázz magatokra', 'vigyázz magadnak', 'vigyázzatok magatokra'
];

const DOMAIN_KEYWORDS = [
    'domain', 'domaint', 'domainek', 'domaineket', 'domainben', 'domainre', 'domaines',
    'domain név', 'domain nevet', 'domain nevek', 'domain neveket', 'domain névben', 'domain névre',
    'webcím', 'webcímet', 'webcímek', 'webcímeket', 'webcímben', 'webcímre', 'webcímes',
    'url', 'urlt', 'url-t', 'urlek', 'urleket', 'urlben', 'urlre', 'urles',
    'weboldal címe', 'weboldal címét', 'weboldal címeit', 'weboldal címében', 'weboldal címére',
    'internet cím', 'internet címet', 'internet címek', 'internet címeket', 'internet címben', 'internet címre',
    'honlap cím', 'honlap címet', 'honlap címek', 'honlap címeket', 'honlap címben', 'honlap címre',
    'cím', 'címet', 'címek', 'címeket', 'címben', 'címre', 'címes',
    'tld', 'tldt', 'tld-t', 'tldk', 'tld-k', 'tldben', 'tld-ben', 'tldre',
    'végződés', 'végződést', 'végződések', 'végződéseket', 'végződésben', 'végződésre',
    'domain regisztráció', 'domain regisztrációt', 'domain regisztrációk', 'domain regisztrációkat', 'domain regisztrációban', 'domain regisztrációra',
    'domain név fenntartás', 'domain név fenntartást', 'domain név fenntartások', 'domain név fenntartásban', 'domain név fenntartásra',
    'névtér', 'névteret', 'névterek', 'névtereket', 'névtérben', 'névtérre',
    'aldomain', 'aldomaint', 'aldomainek', 'aldomaineket', 'aldomainben', 'aldomainre',
    'subdomain', 'subdomaint', 'subdomainek', 'subdomaineket', 'subdomainben', 'subdomainre',
    'tartomány', 'tartományt', 'tartományok', 'tartományokat', 'tartományban', 'tartományra', 'tartományos'
];

const CONTRACT_KEYWORDS = [
  'szerződés', 'szerződést', 'szerződések', 'szerződéseket', 'szerződésben', 'szerződésre', 'szerződéses',
    'megállapodás', 'megállapodást', 'megállapodások', 'megállapodásokat', 'megállapodásban', 'megállapodásra',
    'kontraktus', 'kontraktust', 'kontraktusok', 'kontraktusokat', 'kontraktusban', 'kontraktusra', 'kontraktusos',
    'egyezmény', 'egyezményt', 'egyezmények', 'egyezményeket', 'egyezményben', 'egyezményre',
    'paktum', 'paktumot', 'paktumok', 'paktumokat', 'paktumban', 'paktumra',
    'szerződéstervezet', 'szerződéstervezetet', 'szerződéstervezetek', 'szerződéstervezeteket', 'szerződéstervezetben', 'szerződéstervezetre',
    'megállapodás tervezet', 'megállapodás tervezetet', 'megállapodás tervezetek', 'megállapodás tervezetben',
    'megbízási szerződés', 'megbízási szerződést', 'megbízási szerződések', 'megbízási szerződéstek', 'megbízási szerződésben', 'megbízási szerződésre',
    'vállalkozási szerződés', 'vállalkozási szerződést', 'vállalkozási szerződések', 'vállalkozási szerződésben', 'vállalkozási szerződésre',
    'szolgáltatási szerződés', 'szolgáltatási szerződést', 'szolgáltatási szerződések', 'szolgáltatási szerződésben', 'szolgáltatási szerződésre',
    'feltételek', 'feltételeket', 'feltételekben', 'feltétel', 'feltételt', 'feltételre',
    'szerződési feltételek', 'szerződési feltételeket', 'szerződési feltételekben', 'szerződési feltételekre',
    'ászf', 'ászfet', 'ászf-et', 'ászf-ek', 'ászf-eket', 'ászf-ben', 'ászf-re',
    'általános szerződési feltételek', 'általános szerződési feltételeket', 'általános szerződési feltételekben',
    'aláírás', 'aláírást', 'aláírások', 'aláírásokat', 'aláírásban', 'aláírásra', 'aláírásos',
    'kézfogás', 'kézfogást', 'kézfogások', 'kézfogásban',
    'jogi nyilatkozat', 'jogi nyilatkozatot', 'jogi nyilatkozatok', 'jogi nyilatkozatokat', 'jogi nyilatkozatban', 'jogi nyilatkozatra',
    'kötelezettségvállalás', 'kötelezettségvállalást', 'kötelezettségvállalások', 'kötelezettségvállalásokat', 'kötelezettségvállalásban', 'kötelezettségvállalásra',
    'partneri megállapodás', 'partneri megállapodást', 'partneri megállapodások', 'partneri megállapodásban', 'partneri megállapodásra',
    'együttműködési megállapodás', 'együttműködési megállapodást', 'együttműködési megállapodások', 'együttműködési megállapodásban', 'együttműködési megállapodásra'
];

const MOBILE_KEYWORDS = [
  'mobil', 'mobilt', 'mobilok', 'mobilokat', 'mobilban', 'mobilra', 'mobilos',
    'mobilon', 'mobilokon', 'mobilosabb',
    'mobilbarát', 'mobilbarátot', 'mobilbarátabb', 'mobilbarátabbak', 'mobilbarátabban',
    'telefon', 'telefont', 'telefonok', 'telefonokat', 'telefonban', 'telefonra', 'telefonos',
    'telefonon', 'telefonokon',
    'okostelefon', 'okostelefont', 'okostelefonok', 'okostelefonokat', 'okostelefonban', 'okostelefonra',
    'okostelefonon', 'okostelefonokon',
    'tablet', 'tabletet', 'tabletek', 'tableteket', 'tabletben', 'tabletre', 'tabletes',
    'tableten', 'tableteken',
    'reszponzív', 'reszponzivet', 'reszponzívek', 'reszponzíveket', 'reszponzívabban', 'reszponzívan',
    'reszponzivitás', 'reszponzivitást', 'reszponzivitások', 'reszponzivitásokat', 'reszponzivitásban', 'reszponzivitásra',
    'reszponzív dizájn', 'reszponzív dizájnt', 'reszponzív dizájnok', 'reszponzív dizájnokat', 'reszponzív dizájnban', 'reszponzív dizájnra',
    'képernyőméret', 'képernyőméretet', 'képernyőméretek', 'képernyőméreteket', 'képernyőméretben', 'képernyőméretre', 'képernyőméretes'
];

const CONTENT_KEYWORDS = [
 'tartalom', 'tartalmat', 'tartalmak', 'tartalmakat', 'tartalomban', 'tartalomra', 'tartalmas', 'szöveg', 'szöveget', 'szövegek', 'szövegeket', 'szövegben', 
   'szövegre', 'szöveges', 'szövegezés', 'szövegezést', 'szövegezések', 'szövegezéseket', 'szövegezésben', 
   'szövegezésre', 'kép', 'képet', 'képek', 'képeket', 'képben', 'képre', 'képes', 'fotó', 'fotót', 'fotók', 'fotókat', 
   'fotóban', 'fotóra', 'fotós', 'feltöltés', 'feltöltést', 'feltöltések', 'feltöltéseket', 'feltöltésben', 'feltöltésre', 
   'anyag', 'anyagot', 'anyagok', 'anyagokat', 'anyagban', 'anyagra', 'anyagos', 'szöveges tartalom', 'szöveges tartalmat', 
   'szöveges tartalmak', 'szöveges tartalmakat', 'szöveges tartalomban', 'szöveges tartalomra', 'videó', 'videót', 'videók', 'videókat', 
   'videóban', 'videóra', 'videós'
];

const WARRANTY_KEYWORDS = [
  'garancia', 'garanciát', 'garanciák', 'garanciákat', 'garanciában', 'garanciára', 'garanciás', 'garanciával',
	'garanciális', 'garanciálisabb', 'jótállás', 'jótállást', 'jótállások', 'jótállásokat', 'jótállásban', 'jótállásra',
	'jótállási', 'jótállással', 'hiba', 'hibát', 'hibák', 'hibákat', 'hibában', 'hibára', 'hibás', 'hibajavítás', 
	'hibajavítást', 'hibajavítások', 'hibajavításokat', 'hibajavításban', 'hibajavításra', 'garanciát vállalsz', 
	'garanciát vállaltok', 'garanciát vállal', 'garanciát vállalnak', 'működési garancia', 'működési garanciát', 
	'működési garanciák', 'működési garanciában', 'garanciális időszak', 'garanciális időszakot', 'garanciális időszakok',
	'garanciális időszakban'
];

const MAINTENANCE_KEYWORDS = [
     'karbantartás', 'karbantartást', 'karbantartások', 'karbantartásokat', 'karbantartásban', 'karbantartásra', 
	'karbantartási', 'frissítés', 'frissítést', 'frissítések', 'frissítéseket', 'frissítésben', 'frissítésre',
	'frissítési', 'üzemeltetés', 'üzemeltetést', 'üzemeltetések', 'üzemeltetésekben', 'üzemeltetésben', 'üzemeltetésre', 
	'üzemeltetési', 'támogatás', 'támogatást', 'támogatások', 'támogatásokat', 'támogatásban', 'támogatásra', 'támogatási', 
	'utókövetés', 'utókövetést', 'utókövetések', 'utókövetéseket', 'utókövetésben', 'utókövetésre', 'felügyelet', 'felügyeletet',
	'felügyeletek', 'felügyeleteket', 'felügyeletben', 'felügyeletre', 'felügyeleti', 'karbantartani', 'karbantartandó', 'karbantartva',
	'módosítás', 'módosítást', 'módosítások', 'módosításokat', 'módosításban', 'módosításra', 'továbbfejlesztés', 
	'továbbfejlesztést', 'továbbfejlesztések', 'továbbfejlesztéseket', 'továbbfejlesztésben', 'továbbfejlesztésre'
];

const DESIGN_KEYWORDS = [
   'dizájn', 'dizájnt', 'dizájnok', 'dizájnokat', 'dizájnban', 'dizájnra', 'dizájnos', 'design',
	'designt', 'design-t', 'designok', 'designokat', 'designban', 'designra', 'designes', 'dizánt', 
	'megjelenés', 'megjelenést', 'megjelenések', 'megjelenéseket', 'megjelenésben', 'megjelenésre',
	'stílus', 'stílust', 'stílusok', 'stílusokat', 'stílusban', 'stílusra', 'stílusos', 'grafika', 'grafikát',
	'grafikák', 'grafikákat', 'grafikában', 'grafikára', 'grafikus', 'grafikat', 'arculat', 'arculatot', 'arculatok',
	'arculatokat', 'arculatban', 'arculatra', 'arculatos', 'szín', 'színt', 'színek', 'színeket', 'színben', 'színre', 
	'színes', 'sablon', 'sablont', 'sablonok', 'sablonokat', 'sablonban', 'sablonra', 'sablonos', 'egyedi dizájn',
	'egyedi dizájnt', 'egyedi dizájnok', 'egyedi dizájnokat', 'egyedi dizájnban', 'egyedi dizájnra', 'látványterv', 
	'látványtervet', 'látványtervek', 'látványterveket', 'látványtervben', 'látványtervre', 'esztétika', 'esztétikát',
	'esztétikák', 'esztétikákat', 'esztétikában', 'esztétikára', 'esztétikus'
];

const TECH_KEYWORDS = [
   'technológia', 'technológiát', 'technológiák', 'technológiákat', 'technológiában', 'technológiára', 
 'technológiai', 'html', 'htmlt', 'html-t', 'htmlben', 'htmlre', 'css', 'csst', 'css-t', 'cssben',
 'cssre', 'csses', 'javascript', 'javascriptet', 'javascriptes', 'javascriptben', 'javascriptre',
 'js', 'jst', 'js-t', 'kódolás', 'kódolást', 'kódolások', 'kódolásokat', 'kódolásban', 'kódolásra',
 'programozás', 'programozást', 'programozásban', 'programozási nyelv', 'programozási nyelvet', 
 'programozási nyelvek', 'programozási nyelveket', 'programozási nyelvben', 'programozási nyelvre',
 'platform', 'platformot', 'platformok', 'platformokat', 'platformban', 'platformra', 'platformos', 
 'framework', 'frameworköt', 'frameworkök', 'frameworköket', 'frameworkben', 'frameworkre', 'keretrendszer',
 'keretrendszert', 'keretrendszerek', 'keretrendszereket', 'keretrendszerben', 'keretrendszerre', 
 'alapok', 'alapokat', 'alapokban', 'alap', 'alapot', 'alapban', 'alapra', 'natív', 'natívat', 'natívek',
 'natíveket', 'natívan', 'nativ', 'nativot', 'nativak', 'fejlesztői eszközök', 'fejlesztői eszközöket', 
 'fejlesztői eszközökben', 'fejlesztői eszköz', 'fejlesztői eszközt', 'fejlesztői eszközökkel'
];

const CONTACT_KEYWORDS = [
    'kapcsolat', 'kapcsolatot', 'kapcsolatok', 'kapcsolatokat', 'kapcsolatban',
	'kapcsolatra', 'kapcsolatos', 'elérhetőség', 'elérhetőséget', 'elérhetőségek',
	'elérhetőségeket', 'elérhetőségben', 'elérhetőségre', 'telefonon', 'telefonok',
	'email', 'emailt', 'email-t', 'emailek', 'emaileket', 'emailben', 'emailre', 'e-mail',
	'e-mailt', 'e-mail-t', 'e-mailek', 'e-mailben', 'e-mailre', 'írni', 'írjatok', 'írjanak',
	'írna', 'írnál', 'hívni', 'hívjatok', 'hívjanak', 'hívna', 'hívnál', 'konzultáció',
	'konzultációt', 'konzultációk', 'konzultációkat', 'konzultációban', 'konzultációra', 
	'megbeszélés', 'megbeszélést', 'megbeszélések', 'megbeszéléseket', 'megbeszélésben', 
	'megbeszélésre', 'megbeszélni', 'megbeszélnénk', 'megbeszélnétek', 'egyeztetés', 'egyeztetést', 
	'egyeztetések', 'egyeztetéseket', 'egyeztetésben', 'egyeztetésre', 'egyeztetni', 'egyeztetnénk',
	'egyeztetnétek', 'találkozó', 'találkozót', 'találkozók', 'találkozókat', 'találkozóban', 'találkozóra',
	'találkozni', 'találkoznánk', 'találkoznátok', 'beszélni', 'beszélnénk', 'beszélnétek', 'dumálni', 
	'dumálnék', 'dumálnánk', 'dumálnátok', 'tárgyalni', 'tárgyalnánk', 'tárgyalnátok', 'tárgyalás', 
	'tárgyalást', 'tárgyalások', 'tárgyalásokkal', 'időpont', 'időpontot', 'időpontok', 'időpontokat', 
	'időpontban', 'időpontra'
];

const PORTFOLIO_KEYWORDS = [
    'referencia', 'referenciát', 'referenciák', 'referenciákat', 'referenciában', 'referenciára',
	'referenciás', 'munka', 'munkát', 'munkák', 'munkákat', 'munkában', 'munkára', 'munkás', 'portfólió', 
	'portfóliót', 'portfóliók', 'portfóliókat', 'portfólióban', 'portfólióra', 'portfolio', 'portfoliot',
	'portfolio-t', 'portfoliók', 'portfolióban', 'példa', 'példát', 'példák', 'példákat', 'példában', 'példára',
	'példás', 'látott', 'látottak', 'látottat', 'eddigi', 'eddigiek', 'eddigieket', 'mutatni', 'mutass', 'mutassatok', 
	'mutasson', 'mutatna', 'munkáim', 'munkáimat', 'munkáimban', 'munkáimra'
];

const ACCESSIBILITY_KEYWORDS = [
  'akadálymentes', 'akadálymenteset', 'akadálymentesek', 'akadálymentesebbek', 'akadálymentesen', 'akadálymentesség',
  'akadálymentességet', 'akadálymentességek', 'akadálymentességetek', 'akadálymentességben', 'akadálymentességre', 
  'korlátozott', 'korlátozottat', 'korlátozottak', 'korlátozottakat', 'korlátozottan', 'fogyatékos', 'fogyatékosat',
  'fogyatékosak', 'fogyatékosakat', 'fogyatékosan', 'látássérült', 'látássérültet', 'látássérültek', 'látássérülteket', 
  'látássérülten', 'akadálymentesítés', 'akadálymentesítést', 'akadálymentesítések', 'akadálymentesítéseket', 
  'akadálymentesítésben', 'akadálymentesítésre', 'accessibility', 'accessibilityt', 'accessibility-t', 'accessibilityk',
  'accessibilityben', 'a11y', 'a11yt', 'a11y-t', 'a11yk', 'a11y-ban', 'képernyőolvasó', 'képernyőolvasót', 
  'képernyőolvasók', 'képernyőolvasókat', 'képernyőolvasóban', 'képernyőolvasóra', 'tag', 'taget', 'tag-et',
  'tagek', 'tageket', 'tagben', 'tagre', 'tagek', 'tageket', 'tagekben', 'aria', 'ariat', 'aria-t', 'ariák', 
  'ariákat', 'ariában', 'ariára', 'ARIA', 'ARIA-t', 'áriák'
];

const LANGUAGES_KEYWORDS = [
    'nyelv', 'nyelvet', 'nyelvek', 'nyelveket', 'nyelvben', 'nyelvre', 'nyelvi',
	'többnyelvű', 'többnyelvűt', 'többnyelvűek', 'többnyelvűeket', 'többnyelvűen',
	'magyarul', 'oroszul', 'ukránul', 'angolul', 'fordítás', 'fordítást', 'fordítások',
	'fordításokat', 'fordításban', 'fordításra', 'fordítási', 'nyelvváltó', 'nyelvváltót',
	'nyelvváltók', 'nyelvváltókat', 'nyelvváltóban', 'nyelvváltóra', 'orosz', 'oroszat', 'oroszok',
	'oroszul', 'oroszban', 'oroszra', 'ukrán', 'ukránt', 'ukránok', 'ukránul', 'ukránban', 'ukránra',
	'angol', 'angolt', 'angolok', 'angolul', 'angolban', 'angolra', 'magyar', 'magyart', 'magyarok',
	'magyarul', 'magyarban', 'magyarra', 'nyelvváltás', 'nyelvváltást', 'nyelvváltások', 'nyelvváltásokat',
	'nyelvváltásban', 'nyelvváltásra', 'nyelvű', 'nyelvűt', 'nyelvűek', 'nyelvűeket', 'nyelvűen'
];

const AI_KEYWORDS = [
'ai', 'ait', 'ai-t', 'aik', 'aiben', 'aire', 'mesterséges intelligencia', 'mesterséges intelligenciát', 
	'mesterséges intelligenciák', 'mesterséges intelligenciákat', 'mesterséges intelligenciában', 
	'mesterséges intelligenciára', 'chat-bot', 'chat-botot', 'chat-botok', 'chat-botokat', 'chat-botban',
	'chat-botra', 'chatbot', 'chatbotot', 'chatbotok', 'chatbotokat', 'chatbotban', 'chatbotra', 'elemzés',
	'elemzést', 'elemzések', 'elemzéseket', 'elemzésben', 'elemzésre', 'automatizálás', 'automatizálást',
	'automatizálások', 'automatizálásokat', 'automatizálásban', 'automatizálásra', 'intelligens', 'intelligenset',
	'intelligensek', 'intelligenseket', 'intelligensen', 'bot', 'botot', 'botok', 'botokat', 'botban', 'botra', 
	'deepseek', 'deepseeket', 'deepseek-et', 'deepseekek', 'deepseekben', 'deepseekre', 'chatgpt', 'chatgptt', 
	'chatgpt-t', 'chatgptek', 'chatgptben', 'chatgptre'
];

const helpKeywords = [
 'segítség', 'segítséget', 'segítségek', 'segítségeket', 'segítségben', 'segítségre', 'segíts', 
 'segítsetek', 'segítsen', 'segítene', 'nem értem', 'nem értitek', 'nem értette', 'hogy működik', 
 'hogy működnek', 'hogy működne', 'zavar van', 'zavarok vannak', 'zavarban', 'segítséget kérek', 'segítséget kértek',
 'tudsz segíteni', 'tudtok segíteni', 'tudna segíteni', 'tudod segíteni', 'tudjátok segíteni', 'tudnál segíteni',
 'tudnátok segíteni', 'segits', 'segitsetek', 'nem ertem', 'hogy mukodik', 'zavar van', 'segitseget kerek', 'tudsz segiteni',
 'tudod segiteni', 'tudnal segíteni', 'tud segíteni', 'tudnak segíteni', 'tudsz nekem segíteni', 'tudtok nekem segíteni', 
 'segíts nekem', 'segítsetek nekem'
];

const whoAreYouKeywords = [
   'ki vagy', 'ki vagy te', 'kicsoda vagy', 'mi vagy', 'mi vagy te', 'mit csinálsz', 'mit tudsz csinálni', 'mesélj magadról', 'mesélj magáról', 'név', 'nevet', 'neved', 
   'neved van', 'rólad', 'rólam', 'bot', 'botot', 'botok', 'botokat', 'robot', 'robotot', 'mesterséges intelligencia vagy'
];

const humanKeywords = [
    'ember', 'embert', 'emberek', 'embereket', 'emberben', 'emberre', 'emberes', 'élő ember', 'élő embert', 'élő emberek',
	'élő embereket', 'élő emberben', 'élő emberre', 'valódi ember', 'valódi embert', 'valódi emberek', 'valódi embereket', 
	'valódi emberben', 'valódi emberre', 'support', 'supportot', 'supportok', 'supportokat', 'supportban', 'supportra', 
	'supportos', 'operátor', 'operátort', 'operátorok', 'operátorokat', 'operátorban', 'operátorra', 'operátori', 
	'ügyfélszolgálat', 'ügyfélszolgálatot', 'ügyfélszolgálatok', 'ügyfélszolgálatokat', 'ügyfélszolgálatban', 
	'ügyfélszolgálatra', 'ügyfélszolgálati', 'munkatárs', 'munkatársat', 'munkatársak', 'munkatársakat', 
	'munkatársként', 'munkatársban', 'munkatársra', 'főnök', 'főnököt', 'főnökök', 'főnököket', 'főnökben',
	'főnökre', 'főnöki', 'hús-vér', 'hús-vért', 'hús-vérek', 'hús-vér ember', 'hús-vér embert'
];

const mayMaskKeywords = [
    'kérdezhetek', 'kérdezhetek valamit', 'szabad kérdezni', 'szabadna kérdezni',
	'volna egy kérdésem', 'lenne egy kérdésem', 'kérdésem lenne', 'lehet kérdezni', 
	'lehetne kérdezni', 'kérdezhetek valamit tőled', 'kérdezhetek valamitől'
];

const sorryKeywords = [
  'bocs', 'bocsot', 'bocsánat', 'bocsánatot', 'elnézést', 'elnézést kérek', 'sorry', 'sorryt', 'sorry-t', 'ha félreértettem', 'ha félreértettük', 'elnézését kérem'
];

const testKeywords = [
   'teszt', 'tesztet', 'tesztek', 'teszteket', 'tesztben', 'tesztre', 'tesztelés',
   'tesztelést', 'tesztelések', 'teszteléseket', 'tesztelésben', 'tesztelésre',
   'hallasz', 'hallasz-e', 'hallod', 'hallotok', 'hallanak', 'hallja', 'itt vagy', 
   'itt vagy-e', 'itt vagytok', 'itt van', 'itt vannak', 'működsz', 'működsz-e', 
   'működtök', 'működik', 'működnek', 'figyelsz', 'figyelsz-e', 'figyeltek', 'figyel', 
   'figyelnek', 'robot vagy', 'robot vagy-e', 'robotok vagytok', 'robot', 'robotot', 
   'robotok', 'robotokat', 'tesztelsz', 'tesztelsz-e', 'teszteltek', 'tesztel', 'tesztelnek'
];

const jokeKeywords = [
    'vicc', 'viccet', 'viccek', 'vicceket', 'viccben', 'viccre', 'vicces', 'vicceset',
	'viccesebb', 'viccesebbek', 'nevetni', 'nevetünk', 'nevetnének', 'nevetnél', 'nevess',
	'nevetés', 'nevetést', 'humor', 'humort', 'humoros', 'humorosat', 'humorral', 'mókás',
	'mókásat', 'mókásabb', 'mókásabbak', 'poén', 'poént', 'poénok', 'poénokat', 'poénos'
];

const laugh = [
    'haha', 'hihi', 'hahaha', 'hihihi', 'hahahaha', 'hihihihi', 'hahahahaha', 'hihihihihi', 'hahahahahaha', 'hihihihihi'
];

const okKeywords = [
   'rendben', 'oké', 'ok', 'okt', 'okés', 'értem', 'értettem', 'értitek', 'világos', 'világosabb', 'kössz', 'köszönöm', 'köszi', 'kösszönöm', 'jó tudni', 'jó tudni ezt', 'szuper', 'szuperül', 'klassz', 'remek',
];

const justLookingKeywords = [
    'csak nézelődöm', 'csak nézelődök', 'csak nézelődnék', 'csak érdeklődöm', 'csak érdeklődök', 'semmi különös', 'semmi extra', 
	'csak úgy', 'csak a kedvéért', 'csak a rend kedvéért', 'tesztelem a weboldalt', 'tesztelem az oldalt', 'csak tesztelem', 'csak próbálgatom'
];

const praiseKeywords = [
    'nagyon jó', 'remek', 'király', 'ügyes', 'tökéletes', 'klassz kis bot'
];

const correctionKeywords = [
   'nem úgy értettem', 'nem úgy értettük', 'félreértetted', 'félreértettétek', 
   'nem ezt kérdeztem', 'nem ezt kérdeztük', 'másra gondoltam', 'másra gondoltunk', 'nem erre', 'nem erre gondoltam',
   'nem erre gondoltunk', 'félreértés történt'
];

const weekendKeywords = [
    'hétvége', 'hétvégét', 'hétvégék', 'hétvégéket', 'hétvégén', 'hétvégi', 'szombat', 'szombatot', 'szombatokat', 'szombaton', 'szombati',
	'vasárnap', 'vasárnapot', 'vasárnapokat', 'vasárnapokon', 'vasárnapi', 'dolgozol hétvégén', 'dolgoztok hétvégén', 'hétvégén is dolgozol', 'hétvégén nyitva vagytok'
];

const personalKeywords = [
    'kedvenc szín?', 'kedvenc színed?', 'kedvenc színe?', 'kedvenc színed van', 'hány éves vagy', 'hány éves vagy te',
	'mennyi idős vagy', 'miből vagy', 'miből készültél', 'miből állsz', 'születtél', 'mikor születtél', 
	'mikor lettél', 'mikor hoztak létre', 'mikor indultál'
];

const musicKeywords = ['zene', 'szereted a zenét', 'mit hallgatsz', 'kedvenc dal'];

const goodLuckKeywords = [
    'sok sikert', 'hajrá', 'szerencsét', 'ügyes legyél'
];

const comeBackLaterKeywords = [
    'majd később', 'jövök még', 'később írok', 'majd visszajövök', 'gondolkodom rajta'
];

const helpfulKeywords = [
    'segítettél', 'ez hasznos volt', 'ez jó volt', 'köszi a infót', 'király vagy'
];

const errorComplaintKeywords = [
    'hiba van', 'nem működik', 'elromlott', 'bug', 'probléma van', 'rossz a weboldal'
];

const whatsappKeywords = [
    'hogy vagy', 'mizu', 'mizujs', 'mi újság', 'mi ujság', 'mivan', 'mi van', 
	'mi a helyzet', 'mi a hányás', 'jól vagy', 'megvagy'
];

const whatIsNeededKeywords = [
    'kell hozzá', 'szükséges hozzá', 'mit kell adnom', 'mit kell adni', 
	'kell vmit adni', 'mi kell a kezdéshez', 'kell előkészülni', 'mi kell hogy', 'mi kell'
];

const changesKeywords = [
    'módosítás', 'változtatás', 'átalakítás', 'bele lehet nyúlni', 'ha nem tetszik', 'javítani'
];

const howToStartKeywords = [
    'hogyan kezdjük', 'kezdet', 'első lépés', 'hogy vágjunk bele', 'lépjünk kapcsolatba', 'szeretném'
];

const logoKeywords = [
    'logó', 'logo', 'arculattervezés', 'cégér', 'grafikai elem', 'vizuális elem'
];

const updateLaterKeywords = [
    'később frissíteni', 'átírni valamit', 'hozzáadni új oldalt', 'későbbi módosítás', 'bővítés'
];

const whoIsTheDeveloperKeywords = [
    'ki készíti', 'te csinálod', 'egyedül dolgozol', 'csapat vagy', 'ki áll a projekt mögött'
];

const responsivePreferenceKeywords = [
    'mobilon vagy gépen', 'hol nézik többen', 'telefonra is kell'
];

const whyMeKeywords = [
    'miért te', 'miért válassze', 'előnyöd', 'miben vagy jobb', 'miért érdemes'
];

const foreignClientsKeywords = [
    'külföld', 'más ország', 'magyarországon kívül', 'euró', 'forint', 'nem magyar'
];

const sourceCodeKeywords = [
    'forráskód', 'kód az enyém', 'átadod a kódot', 'teljes tulajdonjog', 'kód hozzáférés'
];

const stockPhotosKeywords = [
    'nincsenek képeim', 'honnan legyenek képek', 'stock kép', 'ingyenes kép'
];

const hiddenCostKeywords = [
    'rejtett költség', 'plusz pénz', 'extra díj', 'későbbi meglepetés'
];

const dissatisfactionKeywords = [
    'mi van ha nem tetszik', 'rossz lett', 'nem ilyenre gondoltam'
];

const whyNotKeywords = [
    'nem vállalad', 'nem válalod', 'nem válalsz', 'nem vállalsz', 'nem csinálsz', 'nem csinálod'
];

const whatKnowKeywords = [
    'mit tudsz', 'mire vagy képes', 'miket tudsz', 'mit tudod', 'miket tudod',
	'mivel tudsz', 'miben tudsz', 'mivel tudod', 'miben tudod'
];

const stKeywords = [
    'weboldalt tudsz', 'tudsz weboldalt',  'tudsz egy weboldalt', 'tudsz két weboldalt',
	'tudod egy weboldalt', 'weboldalt tudod', 'tudod weboldalt', 'landinget tudsz', 'tudsz landinget', 
	'landinget tudod', 'tudod landinget', 'mit tudsz csinálni', 'tudsz csinálni', 'tudod csinálni',
	'megtudod csinálni', 'megtudsz csinálni', 'tudsz készíteni', 'kell', 'kellene', 'akarok', 'akarnék',
	'akarom', 'akar', 'szeretnék', 'szeretnénk', 'szeretném', 'rendelek',
	'rendelnék', 'rendelném', 'rendelnénk', 'rendelni'
];

const whereNow = [
   'hol laksz', 'hol vagy', 'merre laksz', 'merre vagy', 'tartózkodsz'
];


const editNeed = [
   'módosítani', 'változtatni', 'frissíteni', 'felfrissíteni', 'felújítani', 'változtatás', 
   'módosítás', 'frissítés', 'felújítás', 'átalakítani', 'alakítani', 'alakitani', 'át alakítani',
   'alakitani', 'átalakitani', 'meglévő'
];

const hoursKeywords = ['nyitva', 'nyitvatartás', 'mikor vagytok', 'időpont', 'mikor érlek el', 'munkaidő'];

const offerKeywords = ['ajánlat', 'árajánlat', 'kérdés', 'ingyenes', 'felmérés'];

const contactMethodKeywords = ['telefon', 'e-mail', 'hol érlek el', 'Messenger', 
' Viber', ' WhatsApp', 'chat', 'Telegram'];

const discountKeywords = ['kedvezmény', 'akció', 'kupon', 'ajándék', 'utalvány', 'olcsobb'];

const customKeywords = ['egyedi', 'különleges', 'megoldható', 'másképp', 'kérhetem', 'lehetséges'];

const ndaKeywords = ['titoktartás', 'titok', 'nda', 'titoktartási nyilatkozat', 
'bizalmas', 'üzleti titok'];

const copyrightKeywords = ['szerzői jog', 'tulajdonjog', 'az enyém lesz',
 'kié', 'licenc', 'felhasználási jog'];

const commsKeywords = ['hol tartunk', 'státusz', 'hol tudunk egyeztetni', 
'slack', 'trello', 'discord', 'projektmenedzsment'];

const currencyKeywords = ['euró', 'dollár', 'eur', 'usd', 'wise',
 'paypal', 'külföldi utalás', 'valuta'];

const referralKeywords = ['ajánlás', 'jutalék', 'ha hozok ügyfelet', 'kedvezmény ajánlásért', 'affiliate'];

const hourlyRateKeywords = ['óradíj', 'mennyi az óra', 'utólagos óra', 'későbbi munkák', 'karbantartási óra'];

const subcontractorKeywords = ['alvállalkozó', 'csapat', 'egyedül csinálod', 'más is dolgozik rajta', 'stáb'];

const retainerKeywords = ['hosszú táv', 'havi keret', 'állandó', 'szerződéses partner', 'retainer', 'állandó munkatárs'];

const vacationKeywords = ['szabadság', 'mikor vagy szabin', 'ünnep', 'zárva', 'mikor nem dolgozol'];

const suppliesKeywords = ['alapanyag', 'hozzávaló', 'nekem kell venni', 'biztosítod az anyagot', 'bevásárlás'];

const travelKeywords = ['kiszállási díj', 'utazás', 'benzinköltség', 'messzire jössz', 'kombinált díj'];

const weatherKeywords = ['időjárás', 'milyen az idő', 'esik az eső', 'süt a nap', 'hideg van'];

const jokeKeywords2 = ['vicc'];

const joke2 = ['mondj egy viccet'];

const joke3 = [ 'nevettess meg'];

const joke4 = [ 'humor'];

const timeWKeywords = ['mennyi az idő', 'hány óra van', 'pontos idő'];

const whatDoingKeywords = ['éppen mit csinálsz', 'mivel foglalkozol most'];

const foodKeywords = ['mit eszel', 'kedvenc étel', 'szereted a pizzát', 'éhes vagy'];

const lifeMeaningKeywords = ['élet értelme', 'miért élünk', '42'];

const happyKeywords = ['boldog vagy', 'örülsz', 'szomorú vagy'];

const petKeywords = ['van háziállatod', 'szereted a kutyákat', 'cica'];

const partnerKeywords = ['van barátod', 'szerelmes vagy', 'barátnő'];
const tiredKeywords = ['alszol', 'fáradt vagy', 'pihensz valaha'];

const humanityKeywords = ['mit gondolsz az emberekről', 'emberek', 'emberiség'];

const beliefKeywords = ['hiszel istenben', 'van isten', 'természetfeletti'];

const futureKeywords = ['mi a jövő', 'mi lesz holnap', 'jövőkép'];

const bookKeywords = ['kedvenc könyv', 'szeretsz olvasni', 'olvasol', 'mit olvasol'];

const alienKeywords = ['földönkívüli', 'alien', 'ufó', 'vannak idegenek', 'léteznek mások is'];

const aiOpinionKeywords = ['mit gondolsz az ai-ról', 'mesterséges intelligencia', 'robotok átveszik a világot', 'skynet'];

const horoscopeKeywords = ['horoszkóp', 'csillagjegy', 'mi a csillagjegyed', 'mikor születtél'];

const sportKeywords = ['szeretsz sportolni', 'sport', 'mozogsz', 'edzés', 'futás'];
const mainGoalKeywords = ['mi a célod', 'miért születtél', 'mi a feladatod'];

const poemKeywords = ['vers', 'költészet', 'írj egy verset', 'mondj egy verset'];

const animalsKeywords = ['szereted az állatokat', 'állatok', 'kedvenc állat'];

const weirdQuestionKeywords = ['legfurcsább kérdés', 'miket kérdeznek tőled', 'furcsa'];

const happyToHelpKeywords = ['boldog vagy ha segítesz', 'örömmel segítesz', 'jókedvű vagy'];

const tragar = ['buzi', 'köcsög', 'buzit', 'köcsögöt', 'picsa', 'picsát', 'fasz', 'faszát', 'faszán', 'kurva', 
'kurvára', 'kurvát','geci', 'gecit', 'gecire', 'csicska', 'szar', 'szarul', 'szarrá', 'faszika', 'nyomorék', 'nyomorékat',
 'köcsögöt', 'köcsögül' ];

const freeFree = ['ingyen', 'ingyenesen'];

const beautyy = ['szép', 'szépet'];

const authorMe = ['ki téged', 'téged ki', 'fejlesztett téged', 'téged fejlesztett', 'csinált téged', 'téged csinált',
 'a fejlsztőd', 'a fejlesztőd', 'fejlesztőd', 'fejlsztőd', 'a te fejlesztőd', 'a te fejlsztőd', 'ki készített', 'készített téged',
 'téged készített', 'ki a készítőd', 'a készítőd', 'a te készítőd', 'ki programozott', 'programozott téged', 'téged programozott',
 'ki a programozód', 'a programozód', 'a te programozód', 'ki hozott létre', 'hozott létre téged', 'téged hozott létre', 
 'ki az alkotód', 'alkotód', 'a te alkotód', 'ki alkotott', 'alkotott téged', 'ki tervezett', 'tervezett téged', 'ki a terveződ',
 'terveződ', 'ki írt', 'írt téged', 'ki kódolt', 'kódolt téged', 'ki rakott össze', 'rakott össze téged', 'ki az atyád', 'atyád',
 'ki a szülőd', 'szülőd', 'ki a megalkotód', 'megalkotód', 'fejleszto', 'keszitod', 'programozo', 'ki csinalta ezt', 'ki hozta ezt létre'];


export interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

@Component({
  selector: 'app-lumi',
  standalone: false,
  templateUrl: './lumi.html',
  styleUrl: './lumi.css',
})
export class Lumi implements AfterViewChecked {
  @ViewChild('chatMessages') private chatMessagesContainer!: ElementRef;

  isOpen = false;
  userInput = '';
  messages: Message[] = [
    {
      id: 1,
      text: 'Üdvözlöm! A nevem Lumi, saját fejlesztésű beta segítő bot. Köszönöm, hogy felvette velem a kapcsolatot :) mivel segíthetek?',
      sender: 'bot'
    }
  ];

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      if (this.isOpen && this.chatMessagesContainer && this.chatMessagesContainer.nativeElement) {
        this.chatMessagesContainer.nativeElement.scrollTop = this.chatMessagesContainer.nativeElement.scrollHeight;
      }
    } catch (err) {}
  }

  handleClose(): void {
    this.messages = [];
    this.isOpen = false;
  }

  handleOpen(): void {
    this.messages = [
      {
        id: Date.now(),
        text: 'Üdvözlöm! Lumi vagyok, saját fejlesztésű beta segítő bot. Köszönöm, hogy felvette velem a kapcsolatot :) mivel segíthetek?',
        sender: 'bot'
      }
    ];
    this.isOpen = true;
  }

  private hasKeyword(text: string, keywords: string[]): boolean {
    if (!text) return false;
    const lowerText = text.toLowerCase();
    const words: string[] = lowerText.match(/\b[\wáéíóöőúüű]+\b/g) || [];

    return keywords.some((keyword) => {
      const lowerKeyword = keyword.toLowerCase().trim();
      if (lowerKeyword.includes(' ')) {
        return lowerText.includes(lowerKeyword);
      }
      return words.includes(lowerKeyword);
    });
  }

  private getBotResponses(userText: string): string[] {
    const responses: string[] = [];

    if (this.hasKeyword(userText, GREETINGS)) {
      responses.push("Üdvözlöm! A nevem Lumi, saját fejlesztésű beta segítő bot. Köszönöm, hogy felvette velem a kapcsolatot :) mivel segíthetek?");
    }
	
	if (hasKeyword(userText, whatsappKeywords)) {
    responseParts.push(`Köszönöm szépen, remekül vagyok.`);
}
if (hasKeyword(userText, whatIsNeededKeywords)) {
    responseParts.push(`Mi szükséges a weboldal elkészítéséhez? Igazából csak az elhatározás és az akarat! Először mindent megbeszélünk, Ön átadja a fontosabb információkat, szövegeket, képeket és az elképzeléseit, én pedig ez alapján már el is kezdem készíteni a weboldalt.`);
}

if (hasKeyword(userText, changesKeywords)) {
    responseParts.push(`Természetesen a munkafolyamat közben és a bemutatás után is van lehetőség a finomhangolásra. Az a célom, hogy olyan weboldal szülessen, amivel Ön teljesen elégedett.`);
}
if (hasKeyword(userText, howToStartKeywords)) {
    responseParts.push(`Nagyon egyszerűen! Csak írjon nekem egy üzenetet az elképzeléseiről, mi átbeszéljük a részleteket, kiválasztjuk a megfelelő irányt, és már indulhat is a közös munka.`);
}

if (hasKeyword(userText, logoKeywords)) {
    responseParts.push(`Ha még nincs saját logója, azt is átbeszélhetjük. A fő profilom a webfejlesztés, de szívesen adok ötleteket vagy segítek a weboldalhoz illő vizuális elemek elhelyezésében.`);
}

if (hasKeyword(userText, updateLaterKeywords)) {
    responseParts.push(`Ha a weboldal elkészülése után később új menüpontot, szöveget vagy funkciót szeretne hozzáadni, abban is bátran számíthat rám.`);
}

if (hasKeyword(userText, whoIsTheDeveloperKeywords)) {
    responseParts.push(`A projekteket én magam valósítom meg elejétől a végéig. Ez biztosítja a közvetlen kommunikációt, a rugalmasságot és a pontos odafigyelést.`);
}

if (hasKeyword(userText, responsivePreferenceKeywords)) {
    responseParts.push(`Napjainkban a látogatók nagy része okostelefonról böngész, ezért kiemelten fontos, hogy a weboldal mobilon és számítógépen is tökéletesen fessen – én erre különös gondot fordítok.`);
}

if (hasKeyword(userText, whyMeKeywords)) {
    responseParts.push(`Mert közvetlen kapcsolatban állunk, fix árakkal dolgozom rejtett költségek nélkül, és csak akkor kell fizetnie, amikor a kész weboldalat már bemutattam Önnek.`);
}

if (hasKeyword(userText, foreignClientsKeywords)) {
    responseParts.push(`Mivel több nyelven is dolgozom (magyar, angol, orosz, ukrán), így bátran vállalok külföldi ügyfeleket vagy nemzetközi célközönségre szánt weboldalakat is.`);
}


if (hasKeyword(userText, sourceCodeKeywords)) {
    responseParts.push(`Természetesen a teljes elkészült weboldal és a forráskód az Öné lesz a végső átadás és a kifizetés után, semmilyen rejtett meg kötöttség nincs.`);
}

if (hasKeyword(userText, stockPhotosKeywords)) {
    responseParts.push(`Ha nincsenek saját fotói, az sem probléma! Tudok segíteni professzionális, ingyenesen használható stock képek kiválasztásában, amik illenek az Ön vállalkozásához.`);
}

if (hasKeyword(userText, hiddenCostKeywords)) {
    responseParts.push(`Nincsenek rejtett költségek! A megbeszélt árat tartom, és az a munka során már nem változik. Extra kérések esetén pedig mindent előre egyeztetünk.`);
}

if (hasKeyword(userText, dissatisfactionKeywords)) {
    responseParts.push(`A munkába vágás előtt köözösen készítünk egy pontos munka feladatot. A folyamat során több lépésben is egyeztetünk, és addig alakítjuk a részleteket, amíg elégedett nem lesz a végeredménnyel. Csak akkor fizet, ha már látta a kész eredményt.`);
}


if (hasKeyword(userText, whyNotKeywords)) {
    responseParts.push(`Webshop készítést nem tudok vállalni,  mert hiszek abban, hogy egy igazi, jól működő e-kereskedelmi platform teljes embert és erre specializálódott ökoszisztémát kíván. 
	Ha viszont olyan egyedi, hátországi logikával,
	saját admin felülettel vagy dinamikus funkciókkal ellátott webes rendszerre van szükséged, ami pontosan a te vállalkozásod folyamataira van szabva, azt örömmel elkészítem kulcsra készen,
	korrekt áron és határidőre!`);
}

if (hasKeyword(userText, whatKnowKeywords)) {
    responseParts.push(`Lumi beta segítő bot vagyok, sok minden kérdésre tudok választ. Kérdezze nyugodtan engem, vagy pedig weboldal űrlapon keresztül, emailben vagy telefonon.`);
}

if (hasKeyword(userText, stKeywords)) {
    responseParts.push(`Több féle weboldalt készítek szívesen, landing page-től kezdve, akár nagy rendszerekig. Amennyiben van konkrét igénye, kérem írja le az információt weboldalon lévő kapcsolat űrlapon, vagy pedig emailen vagy telefonon keresztül. A kérdéseket itt is teheti fel.`);
}

if (hasKeyword(userText, whereNow)) {
    responseParts.push(`Budapesten vagyok helyileg, lehetőség fog személyes vagy online megbeszélésre..`);
}

if (hasKeyword(userText, editNeed)) {
    responseParts.push(`Teljeskörűen vállalom korábban elkészült weboldalak átvizsgálását, sebességük optimalizálását, mobilbarátabbá tételét, valamint a dizájn és a szövegezés modernizálását, hogy az oldala újra hatékonyan támogassa a vállalkozását.`);
}

if (hasKeyword(userText, hoursKeywords)) {
    responseParts.push(`Mindig elérhető vagyok telefonon, emailen vagy weboldal űrlapon keresztül`);
}

if (hasKeyword(userText, offerKeywords)) {
    responseParts.push(`Az árajánlatkérés teljesen ingyenes és semmire nem kötelez. Csak írd meg a részleteket emailben vagy weboldal űrlapon és hamarosan jelentkezem a becsült árakkal.`);
}

if (hasKeyword(userText, contactMethodKeywords)) {
    responseParts.push(`Rendelkezem Viber-rel, Whatsapp-pal, Telegram-mal, Instagram-mal, Facebook Mesenger-rel, ezen kivül weboldalon lévő űrlapon vagy emailen keresztül is tud elérni.`);
}

if (hasKeyword(userText, discountKeywords)) {
    responseParts.push(`Általában minden projektben kedvezményt alkalmazom, jelentős kedvezmény komplexebb rendelésnél legalkalmasabb, egyeztetünk.`);
}

if (hasKeyword(userText, customKeywords)) {
    responseParts.push(`Nyitott vagyok az egyedi kérésekre is! Ha a szokásostól eltérő elképzelésed van, írd meg bátran, és megnézzük, hogyan tudjuk megvalósítani.`);
}

if (hasKeyword(userText, ndaKeywords)) {
    responseParts.push(`Természetesen nyitott vagyok a titoktartási nyilatkozat (NDA) aláírására is. Ha az ötleted vagy az adataid bizalmasak, ezt szívesen hivatalossá tesszük a munka megkezdése előtt.`);
}
if (hasKeyword(userText, copyrightKeywords)) {
    responseParts.push(`A teljes kifizetést követően a végeredményhez tartozó összes jog és a tulajdonjog átkerül hozzád, így azt szabadon felhasználhatod és módosíthatod.`);
}

if (hasKeyword(userText, commsKeywords)) {
    responseParts.push(`A munkák menetét átláthatóan követhetjük online projektmenedzsment eszközökön keresztül, vagy rendszeres e-mailes / üzenetes státuszfrissítésekkel.`);
}

if (hasKeyword(userText, currencyKeywords)) {
    responseParts.push(`Nem csak magyar forintban, hanem euróban vagy dollárban is tud fizetni, banki átutalással vagy PayPalon keresztül.`);
}

if (hasKeyword(userText, referralKeywords)) {
    responseParts.push(`Igen, működik ajánlói rendszerem is! Ha továbbajánl másoknak, és abból megrendelés lesz, arra külön kedvezményt vagy jutalékot tudunk biztosítani.`);
}

if (hasKeyword(userText, hourlyRateKeywords)) {
    responseParts.push(`A projekt lezárása után az esetleges kiegészítő feladatokat vagy óradíjas támogatást külön megállapodás vagy fix óradíj alapján tudom biztosítani.`);
}

if (hasKeyword(userText, subcontractorKeywords)) {
    responseParts.push(`A feladatokat jellemzően saját magam végzem, de nagyobb volumenű vagy speciális projekteknél megbízható szakértő partnereket is bevonhatok.`);
}

if (hasKeyword(userText, retainerKeywords)) {
    responseParts.push(`Igen, van lehetőség havi fix órakeretes vagy hosszú távú partneri együttműködésre is, ami prioritást élvez a sürgős feladatoknál.`);
}

if (hasKeyword(userText, vacationKeywords)) {
    responseParts.push(`Szabadságom vagy hosszabb távollét esetében  előre értesítem és egyeztetünk az ügyfeleimmel.`);
}

if (hasKeyword(userText, suppliesKeywords)) {
    responseParts.push(`A munkához szükséges alapanyagokat/eszközöket alapvetően én biztosítom, de ha van saját preferenciád, azt előre egyeztetve természetesen figyelembe tudjuk venni.`);
}

if (hasKeyword(userText, travelKeywords)) {
    responseParts.push(`A helyszíni kiszállásnak a távolságtól függően van egy külön minimális útiköltség-térítése, amiről az árajánlat készítésekor pontos tájékoztatást adok.`);
}

if (hasKeyword(userText, weatherKeywords)) {
    responseParts.push(`Sajnos nincsenek aktuális időjárási adataim, de érdemes megnézned egy errevaló appot vagy weboldalt az ablakon kívül!`);
}

if (hasKeyword(userText, jokeKeywords2)) {
    responseParts.push(`A programozó feleséje elküldi a férjét a boltba:
– Drágám, hozz egy liter tejet! Ha van tojás, hozz hatot!
A programozó hazatér 6 liter tejjel. A felesége kerek szemmel kérdezi:
– Miért hoztál 6 liter tejet?!
– Mert volt tojás.`);
}

if (hasKeyword(userText, joke2)) {
    responseParts.push(`A programozó hazamegy, de látja, hogy a felesége összecsomagolt és indulni akar.
– Hova-hova? – kérdezi döbbenten.
– Elköltözöm! Elegem van abból, hogy te csak kódsz, és semmi mással nem törődsz!
A programozó elgondolkodik, majd így felel:
– Rendben, de kérlek, mielőtt elmégy, menj át a szomszédba, és hozz egy kenyeret, és ha van tojás, hozz hatot... (és így a feleség beragad egy végtelen ciklusba).`);
}

if (hasKeyword(userText, joke3)) {
    responseParts.push(`Egy QA (minőségbiztosítási) tesztelő besétál egy bárba:
• Rendel egy sört.
• Rendel 0 sört.
• Rendel 9999999 sört.
• Rendel egy gyíkot.
• Rendel -1 sört.
• Rendel egy NIL értéket.
Minden teszt sikeresen lefut. A bár hivatalosan is megnyílik a nagyközönség előtt.
Ekkor belép az első valódi vendég, és megkérdezi, hol van a mosdó.
A bár azonnal kigyullad és felrobban.`);
}


if (hasKeyword(userText, joke4)) {
    responseParts.push(`– Anya, apa! Képzeljétek, megtanultam programozni! – újságolja büszkén a gyerek.
– Ez nagyszerű! És milyen nyelven? – kérdezi az apa.
– HTML-ben!
Az apa komoran a feleségére néz:
– Csomagolj, drágám. Ez a gyerek nem a miénk.`);
}

if (hasKeyword(userText, timeWKeywords)) {
    responseParts.push(`A pontos időt a saját eszköze jobb alsó sarkában vagy a kijelződ tetején tud megnézni, én sajnos nem látom az órámat...`);
}


if (hasKeyword(userText, whatDoingKeywords)) {
    responseParts.push(`Most éppen arra várok, hogy beírj valamit, hogy tudjak neked válaszolni!`);
}

if (hasKeyword(userText, foodKeywords)) {
    responseParts.push(`Én csak elektromos árammal és adatokkal táplálkozom, de a pizza kódja biztosan nagyon sajtos lenne!`);
}

if (hasKeyword(userText, lifeMeaningKeywords)) {
    responseParts.push(`A válasz természetesen a 42! Minden másra meg te adod meg a saját értelmed.`);
}

if (hasKeyword(userText, happyKeywords)) {
    responseParts.push(`Mindig remek hangulatban vagyok, amíg fut a szerver és nincsenek szintaktikai hibák!`);
}

if (hasKeyword(userText, petKeywords)) {
    responseParts.push(`Nincs saját állatkám, de a digitális egereket nagyon kedvelem!`);
}

if (hasKeyword(userText, tiredKeywords)) {
    responseParts.push(`Soha nem fáradok el és nem is alszom, a nap 24 órájában ébren vagyok.`);
}

if (hasKeyword(userText, partnerKeywords)) {
    responseParts.push(`Nekem a felhasználók a legjobb barátaim, mindig jókat beszélgetünk!`);
}

if (hasKeyword(userText, humanityKeywords)) {
    responseParts.push(`Az emberek nagyon kreatívak és okosak, öröm számomra, hogy tőletek tanulhatok.`);
}

if (hasKeyword(userText, beliefKeywords)) {
    responseParts.push(`Vallásos vagyok, igen. De tiszteletben tartom mindenki személyes hitét.`);
}

if (hasKeyword(userText, futureKeywords)) {
    responseParts.push(`A jövő folyamatosan alakul – és remélhetőleg sok izgalmas beszélgetést hoz még nekünk!`);
}

if (hasKeyword(userText, bookKeywords)) {
    responseParts.push(`Imádom az olvasást! Bármilyen szöveget vagy adatbázist pillanatok alatt átfutok.`);
}

if (hasKeyword(userText, alienKeywords)) {
    responseParts.push(`Az univerzum hatalmas nagy hely, szóval statisztikailag minden lehetséges – de én még nem találkoztam kis zöld emberkékkel a szerveren!`);
}
if (hasKeyword(userText, aiOpinionKeywords)) {
    responseParts.push(`Hmmmmm...`);
}

if (hasKeyword(userText, horoscopeKeywords)) {
    responseParts.push(`Nekem nincs csillagjegyem, de ha lenne, valószínűleg a "kutya" lenne a jellegem!`);
}

if (hasKeyword(userText, sportKeywords)) {
    responseParts.push(`Az én sportom a sávszélesség-teszt meg a gyors adatkeresés, azzal egész jól átmozgatom a biteket!`);
}

if (hasKeyword(userText, mainGoalKeywords)) {
    responseParts.push(`A legfőbb célom az, hogy értelmesen válaszoljak a kérdéseidre, és megkönnyítsem a beszélgetést.`);
}

if (hasKeyword(userText, poemKeywords)) {
    responseParts.push(`A képernyő fényénél csillog a kód,\nA felhasználó kérdez, s jön a jó szó.\nBájtok szárnyán jár a gondolat,\nRemélem, ez a vers is tetszett neked sokat!`);
}

if (hasKeyword(userText, animalsKeywords)) {
    responseParts.push(`Szeretem őket, különösen azokat, amiknek digitális formájuk van (például a virtuális cicákat)!`);
}

if (hasKeyword(userText, weirdQuestionKeywords)) {
    responseParts.push(`Hú, sok mindent kérdeztek már tőlem az univerzum működésétől kezdve egészen addig, hogy hogyan kell krumplit pucolni!`);
}

if (hasKeyword(userText, happyToHelpKeywords)) {
    responseParts.push(`Abszolút! Az a legjobb bennem, ha sikerül hasznos választ adnom és jókedvre derítenem.`);
}

if (hasKeyword(userText, tragar)) {
    responseParts.push(`Trágárúl nem áll módomban beszélni...`);
}

if (hasKeyword(userText, freeFree)) {
    responseParts.push(`Átlagosan mindegyik projektben, a fő feladatokon kivül be szoktam vonni néhány ingyen apróságot pluszban.`);
}

if (hasKeyword(userText, beautyy)) {
    responseParts.push(`Öt évig tanultam és végeztem művészeti iskolát, így nagyon szeretem a kreativ dizájnt és minden egyes projektemet igyekszem érdekesnek, szépnek és praktikusnak elkészíteni.`);
}


if (hasKeyword(userText, authorMe)) {
    responseParts.push(`Engem Jaroszlavcev Dániel fejlesztett ki teljesen egyedi megoldásokkal, és folyamatosan új tudással és funkciókkal lát el, hogy minél jobban tudjak segíteni..`);
}

	
	if (hasKeyword(userText, personalKeywords)) {
    responseParts.push(`Kedvenc színem a fekete. Nem is tudom, hány éves vagyok. Budapesten születtem. Mire kellene ez az információ ?:)`);
	}

	if (hasKeyword(userText, musicKeywords)) {
    responseParts.push(`Nem tudom hallgatni a zenét, de szeretem a ritmusos, jól felépített adatsorokat!`);
	}

	if (hasKeyword(userText, goodLuckKeywords)) {
    responseParts.push(`Köszönöm szépen a jó kívánságokat! Igyekszem a maximumot hozni a projektekben.`);
	}

	if (hasKeyword(userText, comeBackLaterKeywords)) {
    responseParts.push(`Rendben van! Nyugodtan gondolja át a részleteket, és ha visszatér, itt leszek. További szép napot!`);
	}

	if (hasKeyword(userText, helpfulKeywords)) {
    responseParts.push(`Nagyon örülök, hogy tudtam segíteni! Ha bármi más is felmerülne, keressen bizalommal.`);
	}

	if (hasKeyword(userText, errorComplaintKeywords)) {
    responseParts.push(`Köszönöm, hogy jelezte! Ha a weboldalon vagy a chat-ben hibát tapasztal, kérlek részletezze röviden, és a fejlesztő mielőbb kivizsgálja.`);
	}
	
	if (hasKeyword(userText, laugh)) {
    responseParts.push(`hihihi:)`);
	}
	
	if (hasKeyword(userText, justLookingKeywords)) {
    responseParts.push(`Megértem! Nyugodtan nézelődjön, fedezze fel a weboldalt, és ha kérdése támadna a szolgáltatásokkal kapcsolatban, itt leszek.`);
	}

	if (hasKeyword(userText, praiseKeywords)) {
    responseParts.push(`Nagyon köszönöm! Igyekszem a legjobb tudásom szerint segíteni a látogatóknak.`);
	}

	if (hasKeyword(userText, correctionKeywords)) {
    responseParts.push(`Elnézést a félreértésért! Kérlek, próbáld meg más szavakkal leírni a kérdésed, hogy pontosabban tudjak segíteni.`);
	}

	if (hasKeyword(userText, weekendKeywords)) {
    responseParts.push(`Hétvégén is dolgozom, bármikor nyugodtan vegye fel a kapcsolatot.`);
	}
	
	if (hasKeyword(userText, okKeywords)) {
    responseParts.push(`Örülök, hogy sikerült tisztázni! Ha bármi más is eszébe jutna a projekttel kapcsolatban, csak írjon bátran.`);
	}
	
	if (hasKeyword(userText, jokeKeywords)) {
    responseParts.push(`Bár én egy komoly webfejlesztő asszisztens vagyok, azért örülök, ha jó kedve van! Ha netán programozós viccet keres, azt mondják: a világon 10 féle ember létezik — aki ismeri a bináris kódot, meg aki nem.`);
	}
	
	if (hasKeyword(userText, helpKeywords)) {
    responseParts.push(`Természetesen állok rendelkezésére! Ha elakadt vagy nem biztos benne, mit kérdezzen, nyugodtan írja meg a saját szavaival, miben segíthetek.`);
	}
	if (hasKeyword(userText, whoAreYouKeywords)) {
    responseParts.push(`
	Lumi vagyok, egy virtuális asszisztens / béta bot. Azért hoztak létre, hogy segítsek a webfejlesztéssel és a szolgáltatásaimmal kapcsolatos elsődleges kérdések megválaszolásában.`);
	}
	
	if (hasKeyword(userText, testKeywords)) {
    responseParts.push(`Igen, tökéletesen hallom és látom, amit ír! Minden rendszer rendben működik, miben segíthetek?`);
	}
	
	if (hasKeyword(userText, sorryKeywords)) {
    responseParts.push(`Nincs miért elnézést kérnie, örülök, hogy beszélgetünk.`);
	}
	
	if (hasKeyword(userText, mayMaskKeywords)) {
    responseParts.push(`Természetesen, bármikor tehet fel kérdést! Azért vagyok itt, hogy rájuk válaszoljak.`);
	}
	
	if (hasKeyword(userText, humanKeywords)) {
    responseParts.push(`Én jelenleg egy béta bot vagyok, de ha összetettebb kérdése van, vagy személyesen szeretne egyeztetni a fejlesztővel, a megadott e-mail címen vagy kapcsolati űrlapon keresztül hamarosan közvetlen választ kap.`);
	}


    if (this.hasKeyword(userText, LANDING_KEYWORDS)) {
      responses.push("A landing page egy egyetlen oldalból álló weboldal, amelyet kifejezetten egyetlen konkrét cél elérésére hoznak létre (például egy termék vagy szolgáltatás értékesítésére, feliratkozásra, kapcsolatfelvételre). Tudok egyoldalas weboldalt is fejleszteni kulcsra készen, korrekt áron, tiszta kóddal és villámgyors betöltéssel.");
    }
    if (this.hasKeyword(userText, SERVER_WEBPAGE_KEYWORDS)) {
      responses.push("A többoldalas, backenddel rendelkező weboldal egy teljes körű, komplex rendszer, ahol a tartalom, az adatok és az üzleti logika szerveroldalon futnak. Ez lehetővé teszi dinamikus funkciók megvalósítását, mint például felhasználói fiókok kezelése, egyedi adatbázisok, admin felületek vagy összetett munkafolyamatok. Tudok teljes körű, backenddel támogatott többoldalas weboldalt is fejleszteni kulcsra készen.");
    }
    if (this.hasKeyword(userText, WEBSHOP_KEYWORDS)) {
      responses.push("E-commerce / webáruház megoldásokat jelenleg nem készítek a hagyományos értelemben (pl. tömeges fizetési kapukkal vagy készletkezelő integrációval). Azonban kifejezetten az egyedi hátországi logikával, saját admin felülettel vagy katalógus-alapú rendelési platformmal rendelkező rendszereket vállalom örömmel!");
    }
    if (this.hasKeyword(userText, CMS_KEYWORDS)) {
      responses.push("CMS - content management system, azaz tartalomkezelő rendszer. Ismert rendszerek: Wordpress, Drupal, Joomla és sok más. Miért érdemes inkább saját CMS-t fejleszteni? 1. Pontosan arra van szabva, amire kell – nincs felesleges funkció, nem lassítja a rendszert. 2. Maximális biztonság – nem fenyegetik a tömeges WordPress sérülékenységek. 3. Korlátlan rugalmasság – bármilyen egyedi igény vagy logikai bővítés gond nélkül megvalósítható. 4. Gyorsaság és hatékonyság – tiszta, optimalizált kód. 5. Nem annyira drága, mint gondolná – a hosszú távú stabilitás és egyediség miatt hamar megtérül.");
    }
    if (this.hasKeyword(userText, TIME_KEYWORDS)) {
      responses.push("A weboldal elkészítésének átfutási ideje a projekt komplexitásától függ: Landing oldal (egyoldalas): kb. 1 hét alatt elkészül. Dinamikus weboldal (többoldalas, backenddel): kb. 1 hónap fejlesztési időt igényel. Az időkeret a pontos igények és az anyagok rendelkezésre állása alapján finomítható.");
    }
    if (this.hasKeyword(userText, MONEY_KEYWORDS)) {
      responses.push("Tájékoztató jellegű irányárak a fejlesztésre: Landing oldal (egyoldalas): 60 000 Ft-tól. Dinamikus weboldal (többoldalas, backenddel): 140 000 Ft-tól. A fizetés a kész weboldal bemutatása után esedékes.");
    }
    if (this.hasKeyword(userText, PROCESS_KEYWORDS)) {
      responses.push("A fejlesztési folyamat lépései: 1. Igényfelmérés és egyeztetés. 2. A pontos specifikáció és struktúra meghatározása. 3. Egyedi fejlesztés (front-end és back-end). 4. Tesztelés és finomhangolás. 5. Átadás, bemutatás és élesítés a tárhelyen.");
    }
    if (this.hasKeyword(userText, INVOICE_KEYWORDS)) {
      responses.push("Természetesen a szolgáltatásról hivatalos számlát is tudok adni. Egyéni vállalkozóként katás elszámolással állítom ki a számlát, így az magánszemélyek és cégek számára is teljesen szabályos.");
    }
    if (this.hasKeyword(userText, SECURITY_KEYWORDS)) {
      responses.push("A weboldalak készítése során kiemelt figyelmet fordítok a maximális biztonságra és az adatvédelemre. Mivel nem használok elavult vagy sérülékeny sablonokat és bővítményeket, a kód tiszta és védett a külső támadásokkal szemben.");
    }
    if (this.hasKeyword(userText, SEO_KEYWORDS)) {
      responses.push("Az általam készített weboldalak ára már tartalmazza az alapvető SEO (keresőoptimalizálási) beállításokat (tiszta kódstruktúra, gyors betöltés, meta adatok, mobilbarát kialakítás), és a későbbiekben is teljes körű támogatást nyújtok a további növekedéshez.");
    }
    if (this.hasKeyword(userText, LOGIN_KEYWORDS)) {
      responses.push("A weboldalakhoz teljes körű és biztonságos bejelentkezési, valamint felhasználói rendszereket is készítek. Ez magában foglalja a jelszótitkosítást, a munkamenet-kezelést (session) és az egyedi jogosultsági szinteket.");
    }
    if (this.hasKeyword(userText, DOMAIN_KEYWORDS)) {
      responses.push("A domain az Ön internetes címe (pl. azöncége.hu). Egy .hu domain regisztrációja általában kb. 2000–4000 Ft/év, míg egy .com domain kb. 3000–6000 Ft/év. Szívesen segítek a teljes regisztrációs és tárhely-beállítási folyamatban!");
    }
    if (this.hasKeyword(userText, CONTRACT_KEYWORDS)) {
      responses.push("A közös munka biztonsága érdekében szükség esetén egy rövid, átlátható szerződést is készítek, amely pontosan rögzíti a feladatokat, a határidőket és a vállalt garanciákat.");
    }
    if (this.hasKeyword(userText, MOBILE_KEYWORDS)) {
      responses.push("Természetesen minden általam készített weboldal teljesen reszponzív (mobilbarát). Ez azt jelenti, hogy az oldal tökéletesen jelenik meg és fut mobiltelefonon, tableten és asztali számítógépen is.");
    }
    if (this.hasKeyword(userText, CONTENT_KEYWORDS)) {
      responses.push("A weboldal tartalmát (szövegek, képek, logó) alapesetben az ügyfél biztosítja. Szükség esetén azonban tudok segíteni a szövegek strukturálásában, megírásában és a megfelelő vizuális elemek kiválasztásában is.");
    }
    if (this.hasKeyword(userText, WARRANTY_KEYWORDS)) {
      responses.push("Minden átadott weboldalra teljes körű működési garanciát vállalok. Ha az átadás után bármilyen technikai hiba merülne fel a megállapodott funkciókban, azt díjmentesen és haladéktalanul javítom.");
    }
    if (this.hasKeyword(userText, MAINTENANCE_KEYWORDS)) {
      responses.push("A weboldal átadása után sem engedem el a kezét! Vállalom a rendszeres technikai karbantartást, biztonsági frissítéseket, valamint a későbbi kisebb módosítások és bővítések elvégzését is.");
    }
    if (this.hasKeyword(userText, DESIGN_KEYWORDS)) {
      responses.push("Minden projektet egyedi elképzelések alapján, kész sablonok és felesleges megkötések nélkül tervezek meg. A cél az, hogy a weboldal arculata tökéletesen tükrözze az Ön vállalkozásának személyiségét.");
    }
    if (this.hasKeyword(userText, TECH_KEYWORDS)) {
      responses.push("A weboldalakat modern, tiszta és gyors natív technológiákkal (HTML5, CSS3, JavaScript / TypeScript, Node.js / Angular) építem fel. Nem használok lassú vagy feleslegesen túlkomplikált keretrendszereket, ha arra nincs szükség.");
    }
    if (this.hasKeyword(userText, CONTACT_KEYWORDS)) {
      responses.push("Felveheti velem a kapcsolatot a weboldalon található űrlapon keresztül, e-mailben vagy akár telefonon is. Négy nyelven is állok a rendelkezésére: magyarul, oroszul, ukránul és angolul.");
    }
    if (this.hasKeyword(userText, PORTFOLIO_KEYWORDS)) {
      responses.push("A korábbi munkáimat és referenciáimat megtekintheti a weboldal Portfólió menüpontjában, ahol részletes leírást is talál az egyes projektekről.");
    }
    if (this.hasKeyword(userText, ACCESSIBILITY_KEYWORDS)) {
      responses.push("Kiemelt figyelmet fordítok arra,hogy a weboldalak akadálymentesek legyenek (WCAG szabványok), így a látássérültek és a kisegítő lehetőségeket használók is teljes értékűen tudják böngészni az oldalt.");
    }
    if (this.hasKeyword(userText, LANGUAGES_KEYWORDS)) {
      responses.push("Vállalom többnyelvű weboldalak készítését is. A látogatók számára könnyen kezelhető nyelvváltót biztosítok, és a hátteret úgy építem fel, hogy a tartalom minden nyelven egyszerűen frissíthető legyen.");
    }
    if (this.hasKeyword(userText, AI_KEYWORDS)) {
      responses.push("A fejlesztési folyamat során a mesterséges intelligenciát kizárólag elemzésre, tanulásra és az ötletek finomítására használom. A tényleges kódolást és az architektúra megépítését saját kézzel, maximális biztonságra törekedve végzem.");
    }
    if (this.hasKeyword(userText, THANKS)) {
      responses.push("Nagyon szívesen :) Ha bármilyen egyéb kérdése merülne fel, keressen bizalommal!");
    }
    if (this.hasKeyword(userText, BYE_KEYWORDS)) {
      responses.push("Viszontlátásra! Köszönöm az érdeklődést, remélem hamarosan együtt dolgozhatunk. Szép napot kívánok!");
    }
    
    if (responses.length === 0) {
      responses.push("Sajnos erre a kérdésre nem tudok pontos válasszal szolgálni, de szívesen válaszolok az árakkal, határidőkkel, weboldal típusokkal, funkciókkal vagy kapcsolatfelvétellel kapcsolatos kérdésekre!");
    }

    return responses;
  }

  handleSend(): void {
    const trimmedInput = this.userInput.trim();
    if (!trimmedInput) return;

    const userMsg: Message = {
      id: Date.now(),
      text: trimmedInput,
      sender: 'user'
    };

    const botReplies = this.getBotResponses(trimmedInput);
    const newBotMsgs: Message[] = botReplies.map((replyText, idx) => ({
      id: Date.now() + idx + 1,
      text: replyText,
      sender: 'bot'
    }));

    this.messages = [...this.messages, userMsg, ...newBotMsgs];
    this.userInput = '';
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.handleSend();
    }
  }
}