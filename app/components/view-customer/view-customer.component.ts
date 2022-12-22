import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  @Input() id!: string;
  customer: Customer = { firstName: '', lastName: '', phone: '', email: '' };

  constructor(private cs: CustomersService, private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.cs.getCustomerById(this.id).subscribe({
      next: (customerData: Customer) => (this.customer = customerData),
    });
  }
  viewTheCustomer() {
    this.cs.viewCustomer(this.customer).then(() => this.activeModal.close()).catch((err) => console.log(err));
  }
 
}
