import { NgModule } from '@angular/core';
import { TemplateComponent } from './pages/template/template.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: '', component: TemplateComponent },
  { path: '**', component: TemplateComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
