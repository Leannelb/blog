import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: 'get', component: GetComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CrudModule { }
