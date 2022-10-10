import { Injectable } from '@angular/core';
import {Output,EventEmitter} from '@angular/core'
import { usersAr } from './product';
@Injectable({
  providedIn: 'root'
})
export class EventEmitterServService {
  usersAr=usersAr;;
  userDetail:any=[];
  constructor() { this.usersAr; this.userDetail ;
 }
 SearchEvent:EventEmitter<any>=new EventEmitter();
userEvent:EventEmitter<any> = new EventEmitter();
buyEvent:EventEmitter<any> = new EventEmitter();

usersInfo(users:any){
  this.usersAr=users;
}
getuserInfo(){return this.usersAr}

user(userDetail:any){
  this.userDetail=userDetail;
  console.log(this.userDetail)
}
getuser(){

  console.log(this.userDetail);
  return this.userDetail}
  
}
