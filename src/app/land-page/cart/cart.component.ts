import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitterServService } from 'src/app/event-emitter-serv.service';
import { ProductServService } from 'src/app/product-serv.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProduct: any;
  count:any;
  copyCart: any;


  constructor(private prodService:ProductServService,private router:Router, private eventEmit:EventEmitterServService) { }

  ngOnInit(): void {
    this.copyCart=this.cartItems();
  }
  clearCart(){
    this.copyCart=this.prodService.clearCart();
    return this.copyCart
  }

  cartItems(){
    this.cartProduct=this.prodService.cartProducts;
    let copyCart=this.cartProduct;
    copyCart.forEach((element1:any) => {
      this.count=0;
      this.cartProduct.forEach((element2:any)=>{
        if(element1.id==element2.id){
          this.count++;
          console.log(this.count);
        }
      })
      if(this.count>0){
        element1.count=this.count;
        element1.totalPrice=element1.price*this.count;
        
        console.log("from cart item "+element1.name,this.count,element1.totalPrice);
        this.count=0;
      }
      
    });
    const CombinedArr=[...new Map(copyCart.map((v:any)=>[v.id,v])).values()];
    CombinedArr.forEach((element:any)=>{
      console.log("combined arr "+element.name,element.price)
    })
     
    return CombinedArr
  }

  buyDirect(copyCart:any){
    this.prodService.directBuy(copyCart);
    this.eventEmit.buyEvent.emit(copyCart);
    this.router.navigate(['directbuy']);
  }
}
