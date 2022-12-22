import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData, doc, setDoc, deleteDoc, docData, } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/Customer';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {
  customersRef = collection(this.firestore, 'customers');
  constructor(private firestore: Firestore) { }

  addCustomer(customer: Customer): Promise<any> {
    return addDoc(this.customersRef, customer) as Promise<any>;
  }

  getCustomers(): Observable<Customer[]> {
    return collectionData(this.customersRef, { idField: "id" }) as Observable<Customer[]>
  }

  updateCustomer(newCustomer: Customer): Promise<any> {
    let customerRef = doc(this.firestore, `customers/${newCustomer.id}`);
    return setDoc(customerRef, newCustomer) as Promise<any>
  }

  deleteCustomer(customer: Customer): Promise<void> {
    let customerRef = doc(this.firestore, `customers/${customer.id}`)
    return deleteDoc(customerRef) as Promise<void>
  }

  getCustomerById(id: string) {
    let customerRef = doc(this.firestore, `customers/${id}`);
    return docData(customerRef, { idField: "id" }) as Observable<Customer>;
  }
  viewCustomer(theViewCustomer: Customer) : Promise<any>{
    let customerRef = doc(this.firestore, `customers/${theViewCustomer.id}`);
    return setDoc(customerRef, theViewCustomer) as Promise<any>
  }
}
