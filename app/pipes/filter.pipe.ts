import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../interfaces/Employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: Employee[], propName: keyof Employee, value: string): Employee[] {
    let filteredEmployees: Employee[] = []
    if (value != '') {
      for (let employee of employees) {
       
        if ((employee[propName] as string).toLowerCase().includes(value.toLowerCase())) {
          filteredEmployees.push(employee)
        }
      }
      return filteredEmployees;
    } else {
      return employees;
    }
  }

}