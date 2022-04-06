import { PassDataService } from './../../services/pass-data.service';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import {map, pluck} from 'rxjs/operators';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  constructor(private data:PassDataService) { }

  count=0;

  ngOnInit(): void {
  }

  newMessage() {
    this.data.changeMessage(++this.count,true)
  }
}


