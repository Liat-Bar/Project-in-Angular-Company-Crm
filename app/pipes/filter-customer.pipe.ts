import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../interfaces/Customer';

@Pipe({
  name: 'filterCustomer'
})
export class FilterCustomerPipe implements PipeTransform {

  transform(customers: Customer[], propName: keyof Customer, value: string): Customer[] {
    let filteredCustomers: Customer[] = []
    if (value != '') {
      for (let customer of customers) {
        if ((customer[propName] as string).toLowerCase().includes(value.toLowerCase()) ) {
          filteredCustomers.push(customer)
        }
        
      }
      return filteredCustomers;
    } else {
      return customers;
    }
  }
}
