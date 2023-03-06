import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from './../../../Services/employees-service/employees.service';
import { Employee } from './../../../Models/Employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit{

  addEmployeeRequest: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  }
  constructor(private router:Router, private EmployeesService:EmployeesService){}

  ngOnInit(): void {
    
  }

  addEmployee(){
    this.EmployeesService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(Employee)=>{
        this.router.navigate(['Employees']);
      }
    });
  }
}
