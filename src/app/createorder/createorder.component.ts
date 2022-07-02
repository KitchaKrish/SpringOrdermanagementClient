import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import OrderDetails from '../orderdetails';

import { OrderserviceService } from '../orderservice.service';
import OutPutModel from '../OutputModel';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent implements OnInit {

  constructor(public orderservice: OrderserviceService, public router : Router) { }

  ngOnInit(): void {
  }

  orderdetail: OrderDetails = new OrderDetails();
  outputModel: OutPutModel = new OutPutModel();

  createOrder() {
    const observable = this.orderservice.createOrder(this.orderdetail);
    observable.subscribe((res: any) => {
      console.log(res)
      this.outputModel.message = res.message;
      this.outputModel.status = res.status;
      if(res.status){
      this.router.navigate(['/thankyou'])
      }else if(!res.status){
        this.router.navigate(['/errorpage'])
      }
    })
  }
cancel(){
  this.router.navigate(['/'])
}

}
