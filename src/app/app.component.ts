import { Component } from "@angular/core";



@Component({
   // template: `<h1>{{title}}</h1>`,
   templateUrl: "app.component.html",
    selector: "app-root"
})
export class AppComponent{
    x: number = 5;
    date: Date=new Date;
    title: string ="Hello My - App from title";
    calc(){
       if(this.date.getHours()>=6&&this.date.getHours()<=12)
          return "good morning";
        else if(this.date.getHours()>12&&this.date.getHours()<18)
        return "good afternoon";
    else
    return "good evening";
    }

    constructor(){

    }
}