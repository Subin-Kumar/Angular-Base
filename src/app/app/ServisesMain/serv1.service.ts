import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {


  counter:number=0
  constructor() {
  
  
}
    countf():void
   {
    this.counter+=2

   }

}
