import { Component, Input } from "angular2/core";


@Component({
    selector : 'heartgly', 
    template : `
        <p> Heart Component </p>
        <i class="glyphicon glyphicon-heart " [style.color]= "isActive ? 'deeppink' : '#ccc'"  (click)="heartClick()"> </i> <span>  {{count}}</span>
                ` , 
    styles: [`
        .glyphicon {cursor: pointer;}
    `]
})

export class HeartComponent {
    @Input('total-like-count') count = 0; 
    @Input('iLike') isActive = false; 
    heartClick() {
        this.isActive = !this.isActive;
        this.count += this.isActive ? +1 : -1;
    }

}