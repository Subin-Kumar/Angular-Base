import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serv2Service {
  counter:number=0
constructor() {
 
  
  
}
    countf():void
   {
    this.counter+=1

   }

}
