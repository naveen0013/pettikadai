import { Component, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EventEmitterServService } from '../event-emitter-serv.service';
import { ProductServService } from '../product-serv.service';
import { UserComponent } from './user/user.component';
@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  
  @ViewChild(UserComponent) userchild: any;
  constructor(private location:Location,private route:ActivatedRoute, private router:Router, private eventEmitServ:EventEmitterServService, private productserv:ProductServService) { }
  searched:any='';
  userNAME="Login";
  user:any=[];
  routes:any;
  
  ngOnInit(): void {
    this.passing();
    console.log("user "+this.user)
   // this.user=this.eventEmitServ.getuser();
   this.eventEmitServ.userEvent.subscribe(res=>{
    console.log("from landpage "+this.user);
    this.user=this.eventEmitServ.userDetail;
    this.changeUsername();
  })
   
  }
/*   ngAfterViewInit()
{
  this.user=this.userchild.user;

}
 */
  passing(){
    this.routes=this.router.url;
    this.router.events.subscribe(res=>{
      if(res instanceof NavigationEnd){
        this.routes=this.router.url;
      }
    })
  }


  changeUsername(){
    if(this.user&&this.user.username){
      this.userNAME=this.user.username;
      console.log(this.userNAME);
    }
  }



  goBack(){
    this.location.back();
  }
  goNext(){
    this.location.forward();
  }
  navigateAccessories(){
    this.router.navigate(['category/accessories']);
  }
  navigateElectronics(){
    this.router.navigate(["category/electronics"])
  }
  routeOrders(){
    if(this.user.length!=0){
      this.router.navigate(['orders']);
    }else{
      this.router.navigate(['login']);
    }
  }


  searching(searched:any){
    this.productserv.searchHere(searched)
      this.eventEmitServ.SearchEvent.emit(searched);
      this.router.navigate(['']);
  }
}
