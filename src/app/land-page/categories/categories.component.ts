import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { products } from '../../product';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  allproducts=products;
  accessoriesItems: any=[];
  electronicsItems: any=[];
  category: any='';
  products: any=[];
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){
    this.categorize();
    this.showCategory();
  }

  categorize(){
    this.allproducts.forEach((element)=>{
      if(element.category==="accessories"){
        this.accessoriesItems.push(element);
      }
      else if(element.category==="electronics"){
        this.electronicsItems.push(element);
      }
    })
  }

  showCategory(){
    this.category=this.route.snapshot.paramMap.get("accessories"||"electronics");
    if(this.category=="accessories"){
      this.products=this.accessoriesItems;
    }else if(this.category=="electronics"){
      this.products=this.electronicsItems;
    }

    this.router.events.subscribe(event=>{
      this.category=this.route.snapshot.paramMap.get("accessories"||"electronics");
      if(event instanceof NavigationEnd){
        if(this.category=="accessories"){
          this.products=this.accessoriesItems;
        }else if(this.category=="electronics"){
          this.products=this.electronicsItems;
        }
    
      }
    })
    
  }

}
