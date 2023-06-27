import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PeoserveService } from '../peoserve.service';
import { IData } from './Data';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  NewName:string="Using Input decorator"
  NewRltn:string=''
  Sub!:Subscription
  

  constructor( private pro:PeoserveService){}
  route=inject(Router)
click2(message:string)
{
this.NewRltn=message
}
backfn(){
  this.route.navigate(['/welcome'])
}
people:IData[]=[]
showimage=false
showim=false
toggle(){
  this.showimage=!this.showimage
}
toggleswi(){
  this.showim=!this.showim
}

_fillist:string=''
newpeople:IData[]=[]
get fillist(){
  return this._fillist
}
set fillist(value:string){
this._fillist=value

this.newpeople=this.people.filter((people:IData)=>people.name.toLowerCase().includes(this._fillist.toLowerCase()))
}
ngOnInit(){
  
  this.Sub=this.pro.getdata().subscribe({
    next:peop=>{this.people=peop
         this.newpeople=this.people
    },
    
        
  })
}





}
