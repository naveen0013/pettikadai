import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterServService } from 'src/app/event-emitter-serv.service';
import { RegisterComponent } from './register/register.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersAr:any=[];
  loginforms !:FormGroup;
  user: any=[];
 // @Output() userEvent= new EventEmitter();
  constructor(private router:Router,private emitServ:EventEmitterServService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.usersAr=this.emitServ.getuserInfo();
    console.log(this.usersAr);
    this.loginforms=this.formbuilder.group({
      username:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]]
    })
  }
   login(){
     this.usersAr.forEach((element:any)=>{
       if((element.username==this.loginforms.value.username)&&(element.password==this.loginforms.value.password)){
        this.emitServ.user(element);
       this.emitServ.userEvent.emit(element);

       //  this.userEvent.emit(element);
       this.user=element;
         console.log(element)
        this.router.navigate(['']);
        alert("Welcome Back !! "+element.username)
       }
      //  else{
      //   alert("user not found")
      // }
     })
   }






  navigateRegister(){
      this.router.navigate(['register'])
  }
  navigateForget(){
    this.router.navigate(['forgetpassword'])
}
}
