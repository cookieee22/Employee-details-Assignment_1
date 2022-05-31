import { Component, OnInit } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeList: Data[] = [
    new Data("F1234","Ray",15000,"Developer",8),
    new Data("F1238","Natasha",9000,"Developer",4),
    new Data("F1231","Lisa",12000,"Developer",7),
    new Data("F1235","Rhys",8000,"Developer",5),
    new Data("F1236","Faith",13000,"Developer",9),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
