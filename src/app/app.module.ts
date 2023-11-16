import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstructorManagementComponent } from './instructor-management/instructor-management.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InstructorFormEditComponent } from './instructor-form-edit/instructor-form-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    InstructorManagementComponent,
    InstructorFormComponent,
    InstructorFormEditComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
