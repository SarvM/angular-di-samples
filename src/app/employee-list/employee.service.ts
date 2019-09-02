import { Injectable } from '@angular/core';
import { EMPLOYEES } from './mock-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(){}

  getEmployees(){
    return EMPLOYEES;
  }
  
}