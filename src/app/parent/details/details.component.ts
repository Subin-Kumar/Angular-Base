import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IData } from '../Data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  Id:Number=0
  constructor(private rout:ActivatedRoute , private router:Router){}
  ngOnInit(): void {
   this.Id=Number(this.rout.snapshot.paramMap.get('id'))
  }
  peopzz:IData|undefined
  Gback(){this.router.navigate(['/Parent'])

  }
  

}
