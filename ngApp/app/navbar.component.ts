import { ROUTER_DIRECTIVES, Router } from 'angular2/router';
import { Component } from 'angular2/core';


@Component({
    selector : 'navbar', 
    templateUrl : 'app/navbar.component.html', 
    directives : [ROUTER_DIRECTIVES]
})

export class NavbarComponent { 

    constructor( private router : Router) { 

    }

    isCurrent(route){ 
        var instruction = this.router.generate(route);
        return this.router.isRouteActive(instruction);
    }

}