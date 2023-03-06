import { EmployeesService } from './../../../Services/employees-service/employees.service';
import { Employee } from './../../../Models/Employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private EmployeesService : EmployeesService) {}

  ngOnInit(): void {
this.EmployeesService.getAllEmployees()
.subscribe({
  next: (employees)=> {
    this.employees = employees;
  },
  error: (response)=> {
    console.log(response); 
  }
});
  }
}
