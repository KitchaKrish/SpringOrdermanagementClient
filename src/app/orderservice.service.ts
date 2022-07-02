import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:8181/order/";

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(public http: HttpClient) { }

  createOrder(orderdetails: {
    orderId: number, orderBrand: String, orderProduct: String,
    orderPrice: number, fromAddress: String, toAddress: String, orderUserName: String
  }) {
    return this.http.post(BASE_URL + "saveOrder", orderdetails);
  }



  getAllOrderDetails() {
    return this.http.get(BASE_URL + "showAllOrderDetails")
  }
  deleteOrder(orderId: number) {
    return this.http.delete(BASE_URL + "deleteOrderById/" + orderId)
  }
//searchAirLineByName

searchAirLineByName(orderName: string) {
  return this.http.get(BASE_URL + "showAllOrderDetailsByName/" + orderName)
}


  //deleteOrderById

}
