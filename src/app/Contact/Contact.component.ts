import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {
  sub(name:NgForm)
  {
     console.log(name);
  }
  constructor() { }

  ngOnInit() {
  }

}
