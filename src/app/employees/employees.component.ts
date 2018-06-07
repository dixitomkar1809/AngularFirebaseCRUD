import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './shared/employee.service';

@Component({
  selector: 'app-employees',
  providers: [EmployeeService],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

}
