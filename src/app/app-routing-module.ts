import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Reference } from './components/reference/reference';

const routes: Routes = [
  { path: '', component: Hero },       // Főoldal
 { path: 'reference', component: Reference },       // Főoldal
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
