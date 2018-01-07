import { Component } from "angular2/core";
import {Observable} from  "rxjs/Rx";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import { ControlGroup, FormBuilder } from "angular2/common";
import { Date } from "angular2/src/facade/lang";


@Component({
    selector : 'Rx-Practice', 
    template : `
                <form [ngFormModel]="form"> 
                    <input id="search" type="text"  ngControl="search" class="form-control" placeholder="search your artist" /> 
                </form>
                `
})
export class RxAdvantureComponent { 
    form: ControlGroup;
    constructor(fb: FormBuilder){
        this.form = fb.group({
            search: []
        });
        var searchs = this.form.find('search');
        searchs.valueChanges.debounceTime(400)
        .map(str => (<string>str).replace(' ', '-'))
        .subscribe(x=> console.log(x));


        // var obs = Observable.fromArray([1,2,3]);
        // obs.subscribe(o => console.log(o)); 

        // var startDates = []; 

        // var startDate = new Date(); 
        // for(var day=-2; day<= 2; day++) { 
        //         var date = new Date(
        //             startDate.getFullYear(), 
        //             startDate.getMonth(), 
        //             startDate.getDate() + day);

        //             startDates.push(date);
        // }
        // Observable.fromArray(startDates)
        // .map(date => {console.log("getting deals for date :  " + date);
        // return [1,2,3];
        // })
        // .subscribe(x => console.log(x));
        // var ob = Observable.fromArray([1,2,3]); 
        // var obs = Observable.empty(); 
        //     obs = Observable.range(1,5); 
        // obs.subscribe(x => console.log(x));

        // var obs = Observable.interval(1000)
        // .flatMap(d => {
        //         console.log("getting data from server");
        //         return Observable.of([1,2,3]);
        // }) 
        // obs.subscribe (x => console.log(x));



        var userStream = Observable.of( { 
            userId : 1, userName : "saimon"
        }).delay(2000); 

        var tweetStream = Observable.of([1,2,3]).delay(1500);
        Observable.forkJoin(userStream, tweetStream)
        .map(joined => new Object({ user: joined[0], tweets : joined[1]}))
        .subscribe(
            x=> console.log(x), 
            error => console.error(error)
         );
        // handling error
        //  var observable = Observable.throw(new Error("cant get server")); 
        //  observable.retry(3)
        //  .subscribe(
        //      x => console.log(x), 
        //      err=> console.error(err)
        //  )
         // 

         var counter = 0; 
         var a = Observable.of("url")
         .flatMap(() => { 
             if (++counter < 2) 
             return Observable.throw(new Error("can't get to connect server")); 
             return Observable.of([1,2,3]);
         });

         a.retry(3).subscribe(
            x => console.log(x), 
            err => console.error(err)
        );
         
         





        

        


    }

    

   
}  