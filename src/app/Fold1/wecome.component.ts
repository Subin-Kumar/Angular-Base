import { Component } from '@angular/core';

@Component({
  selector: 'app-wecome',
  templateUrl: './wecome.component.html',
  styleUrls: ['./wecome.component.css']
  // styles:['h1{color:red}']
})
export class WecomeComponent {

styleng(){
  return {'color':'blue',
  'font-size':'50px',
  'font-style':'Italic'}
}
}
