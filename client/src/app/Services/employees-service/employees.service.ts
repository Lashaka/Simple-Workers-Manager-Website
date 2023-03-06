import { Employee } from './../../Models/Employee.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }


  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>('https://localhost:7172' + '/api/employees');

  }

  addEmployee(addEmployeeRequest:Employee) : Observable<Employee>{
    return this.http.post<Employee>('https://localhost:7172' + '/api/employees',addEmployeeRequest);
  }

  getEmployee(id:string) : Observable<Employee>{
    return this.http.get<Employee>('https://localhost:7172' + '/api/employees/'+id);
  }

  UpdateEmployee(id:number, updateEmployeeRequest: Employee) : Observable<Employee>{
    return this.http.put<Employee>('https://localhost:7172' + '/api/employees/'+id,updateEmployeeRequest);
  }

  DeleteEmployee(id:number) : Observable<Employee>{
    return this.http.delete<Employee>('https://localhost:7172' + '/api/employees/'+id);
  }
  randomEmployee(addEmployeeRequest:Employee) : Observable<Employee>{
    return this.http.post<Employee>('https://localhost:7172' + '/api/employees/Random',addEmployeeRequest);
  }



}
