import { Employee } from './../../../Models/Employee.model';
import { EmployeesService } from './../../../Services/employees-service/employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee ={
    id: 0,
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  };

  constructor(private route: ActivatedRoute, private EmployeesService : EmployeesService, private router:Router,) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
            this.EmployeesService.getEmployee(id)
            .subscribe({
              next:(response) =>{
                this.employeeDetails = response;
              }
            })
        }
      },
    });
  }

  updateEmployee(){
    this.EmployeesService.UpdateEmployee(this.employeeDetails.id, this.employeeDetails)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['Employees']);
      }
    });
  }

  deleteEmployee(id: number){
      this.EmployeesService.DeleteEmployee(id)
      .subscribe({
        next: (response) =>{
          this.router.navigate(['Employees']);
        }
      });
  }
}
