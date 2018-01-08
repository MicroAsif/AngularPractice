import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Component, Directive } from 'angular2/core';
@Component({
    selector: 'year',
    template: `
                <h3>Archives</h3>
                <ul> 
                    <li *ngFor="#a of archives" > <a  [routerLink] ="['Archive', {year : a.year, month : a.month}]"> {{a.year}} / {{a.month  }}</a></li> 
                </ul>
            `, 
            directives : [ROUTER_DIRECTIVES]
    
    
    
})
export class YearComponent{
        archives = []; 
        constructor() { 
            this.archives  =this.getArchives(); 
        }
        getArchives () { 
            return [{month:1, year : 2016},
                    {month:2, year : 2016}, 
                    {month:3, year : 2016},
                    {month:4, year : 2016},
                    {month:5, year : 2016},
                    {month:6, year : 2016}]
        }
        
}