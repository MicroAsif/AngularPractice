import { Component } from '@angular/core'

@Component({
    selector: 'calculator',
    templateUrl: './calculate.component.html',
    styleUrls: ['./calculate.component.css']
})

export class CalculateComponent {
    public firstNumber: number;
    public secondNumber: number;
    public result: number;

    public add() {
        this.result = this.firstNumber + this.secondNumber;
    }

    public sub() {
        this.result = this.firstNumber - this.secondNumber;
    }

    public mult() {
        this.result = this.firstNumber * this.secondNumber;
    }      

}