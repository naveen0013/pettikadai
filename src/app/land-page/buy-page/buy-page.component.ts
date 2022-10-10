import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServService } from 'src/app/product-serv.service';
import { Location } from '@angular/common';
import { products } from 'src/app/product';
import { ProductType } from 'src/app/productType';
import { EventEmitterServService } from 'src/app/event-emitter-serv.service';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent implements OnInit {
products=products
  selectedProduct: any;
  buydirectAr:any=[];
  user: any=[];
  constructor(private prodService:ProductServService, private location:Location,public route:ActivatedRoute,private eventEmit:EventEmitterServService,private router:Router) { }

  ngOnInit(): void {
    this.showProduct();
    this.user=this.eventEmit.userDetail;
    this.eventEmit.userEvent.subscribe(res=>{
      this.user=this.eventEmit.userDetail;
    })
  }
  showProduct(){
     let id=Number(this.route.snapshot.paramMap.get("id"));
     this.products.forEach(ele=>{
        if(ele.id==id){
          this.selectedProduct=ele;
         //console.log(this.selectedProduct);
        }
     });
  }
  cart(a:any){
    if(this.user.length!=0){
    let product=this.prodService.addtoCart(a);
    console.log("from click "+a);
  }else{
    this.router.navigate(['login']);
  }
  }
  buyDirect(pr:any){
    if(this.user.length!=0){
    this.buydirectAr.push(pr);
    this.prodService.directBuy(this.buydirectAr);
    this.eventEmit.buyEvent.emit(this.buydirectAr)
    this.router.navigate(['directbuy']);
  }else{
    this.router.navigate(['login']);
  }
  }
}
