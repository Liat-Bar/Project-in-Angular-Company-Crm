import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {
  employees : Employee[]=[];
name: string='';

  constructor(private es: EmployeesService, activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
this.employees = this.es.getEmployees();
  }

}
