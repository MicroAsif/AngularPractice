import { Component } from '@angular/core';
import { customer } from './customer';
import { CUSTOMERS } from './customer.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
/** customer component*/
export class CustomerComponent {
    /** customer ctor */
    customers: customer[];
    p: number = 1; 
    constructor() {
        this.customers = CUSTOMERS;
    }
}