import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/crud/add/add.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./components/crud/crud.module').then(m => m.CrudModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
