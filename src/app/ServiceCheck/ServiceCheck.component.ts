import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../app/ServisesMain/serv1.service';
import { Serv2Service } from '../app/ServisesMain/serv2.service';

@Component({
  selector: 'app-ServiceCheck',
  templateUrl: './ServiceCheck.component.html',
  styleUrls: ['./ServiceCheck.component.css']
})
export class ServiceCheckComponent implements OnInit {

  constructor( s1:Serv1Service,s2:Serv2Service) { }

  ngOnInit() {
  }

}
