import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IData } from './parent/Data';

@Injectable({
  providedIn: 'root'
})
export class PeoserveService {
  constructor(private http:HttpClient){}
 getdata():Observable<IData[]>{
  return this.http.get<IData[]>('app/DataPeo/peodat.json')
 }
 
}
