import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { AttrselectorsComponent } from './attrselectors/attrselectors.component';
import { StructdirectiveComponent } from './structdirective/structdirective.component';
import { RedDirective } from './red.directive';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SingleemployeeComponent } from './singleemployee/singleemployee.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DatabindingComponent,
    AttrselectorsComponent,
    StructdirectiveComponent,
    RedDirective,
    UserFormComponent,
    AddEmployeeComponent,
    SingleemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
