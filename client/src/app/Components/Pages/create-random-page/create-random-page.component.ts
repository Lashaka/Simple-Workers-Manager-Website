import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee.model';
import { EmployeesService } from './../../../Services/employees-service/employees.service';


@Component({
  selector: 'app-create-random-page',
  templateUrl: './create-random-page.component.html',
  styleUrls: ['./create-random-page.component.scss']
})
export class CreateRandomPageComponent {

  addEmployeeRequest: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  }

  constructor(private router:Router, private EmployeesService:EmployeesService){}

  randomEmployee(){
    this.EmployeesService.randomEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(Employee)=>{
        this.router.navigate(['Employees']);
      }
    });
  }
}