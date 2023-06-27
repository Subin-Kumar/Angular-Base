import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IData } from '../parent/Data';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() name:string=""
  chname:string="Template ref 1"
  hidform:string=''
  
  @Input() products!:IData[]
  @Output()Cou:EventEmitter <string>=new EventEmitter
  onClick(){
    this.Cou.emit(`Using output Decorator from parent`)
  }
  chref(){
    alert("Template ref 2") 
  }
  


}
