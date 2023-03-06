import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './Components/Employees/edit-employee/edit-employee.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainPageComponent } from './Components/Pages/main-page/main-page.component';
import { EmployeesPageComponent } from './Components/Pages/employees-page/employees-page.component';
import { AddEmployeePageComponent } from './Components/Pages/add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './Components/Pages/edit-employee-page/edit-employee-page.component';
import { CreateRandomPageComponent } from './Components/Pages/create-random-page/create-random-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    MainPageComponent,
    EmployeesPageComponent,
    AddEmployeePageComponent,
    EditEmployeePageComponent,
    CreateRandomPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
