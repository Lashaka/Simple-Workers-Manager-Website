import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesPageComponent } from './Components/Pages/employees-page/employees-page.component';
import { MainPageComponent } from './Components/Pages/main-page/main-page.component';
import { AddEmployeePageComponent } from './Components/Pages/add-employee-page/add-employee-page.component';
import { EditEmployeePageComponent } from './Components/Pages/edit-employee-page/edit-employee-page.component';
import { CreateRandomPageComponent } from './Components/Pages/create-random-page/create-random-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'Home',
    component: MainPageComponent
  },
  {
    path: 'Employees',
    component: EmployeesPageComponent
  },
  {
    path: 'Employees/Add',
    component: AddEmployeePageComponent
  },
  {
    path: 'Employees/edit/:id',
    component: EditEmployeePageComponent
  },
  {
    path: 'Employees/Random',
    component: CreateRandomPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
