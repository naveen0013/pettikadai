import { Component, OnInit } from '@angular/core';
import { EventEmitterServService } from 'src/app/event-emitter-serv.service';
import { ProductServService } from 'src/app/product-serv.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-direct-buy',
  templateUrl: './direct-buy.component.html',
  styleUrls: ['./direct-buy.component.css']
})
export class DirectBuyComponent implements OnInit {
  OrderPlaceforms !:FormGroup;
  cartProducts:any;
  totalprice: any;
  countHere:any;
  user: any=[];
  //addresses:string="";
  date = new Date().toLocaleDateString();
  constructor(private prodServ:ProductServService,private router:Router,private eventEmit:EventEmitterServService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.cartProducts=this.prodServ.directBuyProducts;
    this.eventEmit.buyEvent.subscribe(res=>{
      this.cartProducts=this.prodServ.directBuyProducts;
      console.log(this.cartProducts);
      })
    this.overallPrice();
    this.OrderPlaceforms=this.formbuilder.group({
      address:[''],
      paymentMethod:['']
  })
    this.user=this.eventEmit.userDetail;
    this.eventEmit.userEvent.subscribe(res=>{
      console.log("from directBuy "+this.user);
      this.user=this.eventEmit.userDetail;
    })
   // this.addresses=this.user.address;
    console.log(this.date);
    this.OrderPlaceforms.patchValue({
      address:this.user.address
    })
  }

  overallPrice(){
    let allProducts=this.cartProducts;
    let price=0;
    allProducts.forEach((element:any)=>{
      if(element.count==0){element.totalPrice=element.price; element.count=1}
      else{element.totalPrice=element.count*element.price;}
    })
    allProducts.forEach((element:any)=>{
      price=element.totalPrice+price;
    })
    this.totalprice=price;
  }

  OrderPlace(){
    console.log("order report :")
     let obj={
       date:this.date,
       customerDetails:this.user,
       purchased:this.cartProducts,
       deliverDetails:{deliverAddress:this.OrderPlaceforms.value.address, paymentMode:this.OrderPlaceforms.value.paymentMethod},
       totalPrice:this.totalprice, 
     }
     this.user.orders=(this.cartProducts);
     console.log(obj)
     alert("your order placed !");
     this.prodServ.clearCart();
     this.totalprice=0;
     this.OrderPlaceforms.reset();
     this.router.navigate(['orders']);
  }
}
