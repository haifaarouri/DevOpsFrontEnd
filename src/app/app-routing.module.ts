import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InstructorManagementComponent } from './instructor-management/instructor-management.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { InstructorFormEditComponent } from './instructor-form-edit/instructor-form-edit.component';

const ROUTES: Routes = [
  { path: '', component: InstructorManagementComponent },
  { path: 'add-instructor', component: InstructorFormComponent},
  { path: 'edit-instructor/:id', component: InstructorFormEditComponent}
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
