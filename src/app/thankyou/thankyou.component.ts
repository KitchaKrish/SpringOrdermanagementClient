import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor( public router : Router) { }

  ngOnInit(): void {
  }


  homepage(){
    this.router.navigate(['/'])
  }


  orderlist(){
    this.router.navigate(['/showlist'])
  }

}
