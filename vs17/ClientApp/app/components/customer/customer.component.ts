import { Component, Inject } from '@angular/core';
import { customer } from './customer';
import { CUSTOMERS } from './customer.service';
import { Http } from '@angular/http';

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
    constructor(http: Http,) {
        http.get('api/Customer').subscribe(result => {
            this.customers = result.json() as customer[];
        }, error => console.error(error));
    }  
}