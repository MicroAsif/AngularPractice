import { Component, Input, Output, EventEmitter } from "angular2/core";

@Component({
    selector : 'vote',
    template : `
                <div class="main vote-button"> 
                    <i class="glyphicon glyphicon-menu-up"  [class.highlighted]="myVote == 1" (click)="upChange()"> </i>
                    <span> {{ count + myVote }}</span>
                    <i class="glyphicon glyphicon-menu-down" [class.highlighted]="myVote == -1" (click)="downChange()"> </i>

                </div> 
                `, 
    styles : [`
        .main  { 
            width : 20px;
            color : #999;
            text-align : center;
            
        }
        .glyphicon { 
            coursor : pointer; 
            
        }
        .highlighted {
            font-weight: bold;
            color: orange;
        }
    `]


})

export class VoteComponent { 

    @Input() count = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();
   
    

    upChange() {
        if (this.myVote == 1)
            return;
        this.myVote++;
        this.vote.emit({vote : this.myVote});
       }
    downChange() {
        if (this.myVote == -1)
            return;
        this.myVote--;
        this.vote.emit({vote : this.myVote});
    }

}