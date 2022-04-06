import { PassDataService } from './../../../../services/pass-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private data:PassDataService) { }

  message:number=0;
  jump:boolean=false;
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => {
      this.message = message;
    });

    this.data.currentjump.subscribe(jump=>{
      this.jump=jump;
      console.log(jump);
    })

  }
}
