import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitterServService } from 'src/app/event-emitter-serv.service';
import { usersAr } from 'src/app/product';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm !:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient,private emitServ:EventEmitterServService) { }
 // private _url="/src/assets/json/users.json";
 usersAr=usersAr;

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      username:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.minLength(6),Validators.required]],
      confirmpassword:['',[Validators.minLength(6),Validators.required]],
      address:['',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]]
    })
  }

  register(){
  
  console.log(this.registerForm.value);
  this.usersAr.forEach((element:any)=> {
      
  if((element.username!=this.registerForm.value.username)&&(element.email!=this.registerForm.value.email)){
    if(this.registerForm.value.password===this.registerForm.value.confirmpassword){
        this.usersAr.push(this.registerForm.value);
  //      console.log("from array "+this.usersAr, this.usersAr[0].username);
        
    }else{
      alert("password not match")
    }

  }else{
    alert("username or email id already taken")
  }

  });
  this.emitServ.usersInfo(this.usersAr);
  this.router.navigate(['login']);
 // via file   
/*   var require: any   
 const fs=require('fs');  
    fs.writeFile(this._url, JSON.stringify(this.registerForm.value), function(err:any) {
      if (err) throw err;
      console.log('complete');
      }
  ); */
  }
}
