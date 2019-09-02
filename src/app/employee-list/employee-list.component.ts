import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] =  EMPLOYEES;

  constructor() { }

  ngOnInit() {
  }

}