import { Component, OnInit ,Input } from '@angular/core';
import { EventEmitterServService } from 'src/app/event-emitter-serv.service';
import { ProductServService } from 'src/app/product-serv.service';
import { products } from '../../product';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  products:any=[];
  
  @Input() searchedWord: any;
  Searchedproducts: any=[];

  constructor(private eventEmitterServ:EventEmitterServService, private  productServ:ProductServService) { }

  ngOnInit(): void {
    console.log(this.searchedWord)
    if(this.searchedWord==""){
      this.products=products;
    }
    this.eventEmitterServ.SearchEvent.subscribe(res=>{
      if(this.searchedWord!=""){
        console.log(this.searchedWord)
      //  this.searchedArray();
      this.products=this.productServ.searchedproducts;
      }
    }) 
    
  }

/*   searchedArray(){
    let allProducts:any[]=products;
    this.Searchedproducts;
    this.products=allProducts.filter((element:any)=>element.name.toLowerCase().indexOf(this.searchedWord.toLowerCase())!==-1)
//     allProducts.forEach((element:any)=>{
      if(element.name.toLowerCase().indexOf(this.searchedWord.toLowerCase()!==-1)){
        this.Searchedproducts.push(element);
      }
    }) //
  } */


}
