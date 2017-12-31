import { Component } from "angular2/core";
import { bufferCount } from "rxjs/operator/bufferCount";


@Component({
    selector : 'heartgly', 
    template : `
        <p> Heart Component </p>
        <i class="glyphicon glyphicon-heart " [style.color]= "isActive ? '#ccc' : 'deeppink'"  (click)="heartClick()"> </i> <span>  {{count}}</span>
                ` , 
    styles: [`
        .glyphicon {cursor: pointer;}
    `]
})

export class HeartComponent {
    count = 10; 
    isActive = true; 
    heartClick() { 
        if (this.isActive) { 
            this.isActive = false;
            this.count = this.count + 1;
        }
        else { 
            this.isActive = true; 
            this.count = this.count -1;
        }

    }

}