import { Component, OnInit } from '@angular/core';
import { EventEmitterServService } from 'src/app/event-emitter-serv.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  user:any=[];
  products:any=[];
  constructor(private eventEmit:EventEmitterServService) { }

  ngOnInit(): void {
    this.user=this.eventEmit.userDetail;
    this.eventEmit.userEvent.subscribe(res=>{
      this.user=this.eventEmit.userDetail;
    })
    this.products=this.user.orders;
    console.log(this.products)
  }

  

}
