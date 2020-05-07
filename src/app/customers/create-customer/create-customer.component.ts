import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customerservice/customer.service';
import {Customer} from '../customerservice/customer';

import {Location} from '@angular/common';
import {Address} from '../customerservice/address';
import {Email} from '../customerservice/email';
import {PhoneNumber} from '../customerservice/phoneNumber';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService, private location: Location) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers()
      .subscribe((customers => this.customers = customers));
  }

  addCustomer(firstname: string,
              lastname: string,
              complete: string,
              domain: string,
              localPart: string,
              countryCallingCode: string,
              number: string,
              streetName: string,
              houseNumber: string,
              postalCode: string,
              country: string){
    console.log('first')
    const numberOfOriginalCustomers = this.customers.length;
    const address: Address = {streetName, country, postalCode , houseNumber};
    const email: Email = {complete, domain, localPart};
    const phoneNumber: PhoneNumber = {countryCallingCode, number};
    const customer: Customer = {firstname, lastname, phoneNumber, address, email} as Customer;
    this.customerService.addCustomer(customer).subscribe(
      createdCustomer => {this.customers.push(createdCustomer); })
      .add(() => this.getCustomers())
      .add(() => {if (this.customers.map(customerInMap => customerInMap.lastname).includes(name)){this.goBack(); }
      });
  }

  goBack(): void {
    this.location.back();
  }
}
