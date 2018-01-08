import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';

@Component({
    selector: 'month',
    template: ` 
             <h3> archived by month </h3> 
             {{archive.year}} / {{archive.month}}

                 `


})
export class MonthComponent{

    archive; 
    constructor(private routerPrams : RouteParams){ 
        this.archive= {
            year : this.routerPrams.get("year"), 
            month: this.routerPrams.get("month")
         } 
    }

}