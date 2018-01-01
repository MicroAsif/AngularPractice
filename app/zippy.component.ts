import { Component } from "angular2/core";


@Component({
    selector : 'zippy', 
    template : `
    
    <div class="panel panel-default" >
            <div class="panel-heading" (click)="isClick()">
                <span  class="glyphicon pull-right" [ngClass]="{
                    'glyphicon-menu-up': isVisible,
                    'glyphicon-menu-down': !isVisible
                }" ></span>
                <ng-content select=".heading"></ng-content>
            </div>
            <div class="panel-body" [ngClass]="{
                'hide': !isVisible,
                'show': isVisible
            }" >
                <ng-content select=".body"></ng-content>
            </div>
    </div>
    
            `,
            styles :[`
                .hide{
                    visibility:collapse;
                }
                .show {
                    visibility:visible;
                }
            `]
})
export class ZippyComponent { 
    isVisible=false;

    isClick(){
        this.isVisible =  !this.isVisible;
    }

    
}