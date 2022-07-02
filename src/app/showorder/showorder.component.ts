import { Component, OnInit } from '@angular/core';
import OrderDetails from '../orderdetails';
import { OrderserviceService } from '../orderservice.service';
import OutPutModel from '../OutputModel';

@Component({
  selector: 'app-showorder',
  templateUrl: './showorder.component.html',
  styleUrls: ['./showorder.component.css']
})
export class ShoworderComponent implements OnInit {

  constructor(public orderService: OrderserviceService) { }

  ngOnInit(): void {
    this.refreshList();
  }
  outputModel: OutPutModel = new OutPutModel();

  orderDetails:OrderDetails[] = [];

  deleteName:String="";

  searchText:string="";

  refreshList() {
    const promise = this.orderService.getAllOrderDetails();
    promise.subscribe((response) => {
      console.log(response);
      this.orderDetails = response as OrderDetails[];
      this.deleteName ="";
      outputModel: OutPutModel ;

    })
 }


 deleteOrderById(orderId:number,orderName:String){
  const promise = this.orderService.deleteOrder(orderId);
  promise.subscribe((res:any) => {
    console.log(res);
    this.outputModel.message = res.message;
    this.outputModel.status = res.status;
    this.deleteName = orderName;
    this.refreshList();
    alert(orderName+" has been deleted....")
  })
 }

 searchByAirlineName() {

  if (this.searchText == "") {
    this.refreshList()
  } else {
    console.log(this.searchText);
    const promise = this.orderService.searchAirLineByName(this.searchText);
    promise.subscribe((res) => {
      console.log(res);
      this.orderDetails = res as OrderDetails[];
      console.log(this.orderDetails)
     // this.refreshList()
    })

  }
}

}
