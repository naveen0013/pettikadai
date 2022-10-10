import { Injectable ,EventEmitter} from '@angular/core';
import {products} from "../app/product";
@Injectable({
  providedIn: 'root'
})
export class ProductServService {
  

  cartProducts:any=[];
  searchedWord: any='';
  products=products;
  searchedproducts: any=[];
  directBuyProducts:any=[];
  constructor() {   }
  // getProducts(){
  //   return this.products
  // }

  addtoCart(cart_pr:any){
    this.cartProducts.push(cart_pr);
  }
  clearCart(){
    this.cartProducts=[];
    return this.cartProducts;
  }
   searchWord(word:any){
    this.searchedWord=word;
  } 

   searchHere(word:any){
      let allProducts:any[]=products;
      this.searchedproducts=[];
    if(word!==""){
      console.log(word)
  //    this.products=allProducts.filter((element:any)=>element.name.toLowerCase().indexOf(word.toLowerCase())!==-1)
      allProducts.forEach((element:any)=>{
        if(element.name.toLowerCase().indexOf(word.toLowerCase())!==-1){
          this.searchedproducts.push(element)
        }
      })
    console.log(this.searchedproducts)
  }else if(word==""){
    this.searchedproducts=products;
    console.log(this.searchedproducts)
  }
  return this.searchedproducts
  }


  directBuy(cart_pr:any){
this.directBuyProducts=cart_pr;
  }
}