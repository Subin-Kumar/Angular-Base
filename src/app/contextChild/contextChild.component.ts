import { Component, Input, OnInit } from '@angular/core';
import { IData } from '../parent/Data';

@Component({
  selector: 'app-contextChild',
  templateUrl: './contextChild.component.html',
  styleUrls: ['./contextChild.component.css']
})
export class ContextChildComponent implements OnInit {

  constructor() { }
  @Input() productdata:IData[]=[]
  ngOnInit() {
  }

}
