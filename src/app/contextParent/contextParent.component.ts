import { Component, OnInit } from '@angular/core';
import { IData } from '../parent/Data';

@Component({
  selector: 'app-contextParent',
  templateUrl: './contextParent.component.html',
  styleUrls: ['./contextParent.component.css']
})
export class ContextParentComponent implements OnInit {

  constructor() { }
  peopledata:IData[]=[
    {"id":1, 'name':"NewSubi"},
    {"id":2, 'name':"NewSisu"},
    {"id":3, 'name':"Newrahul"}


]
toppeopledata:IData[]=[
  {"id":1, 'name':"topSubi"},
  {"id":2, 'name':"topSisu"},
  {"id":3, 'name':"toprahul"}


]

  ngOnInit() {
  }

}
