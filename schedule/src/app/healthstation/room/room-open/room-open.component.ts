import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-room-open',
  templateUrl: './room-open.component.html',
  styleUrls: ['./room-open.component.css']
})
export class RoomOpenComponent implements OnInit {

  constructor(private _productService: ProductService, private router: Router) { }
  models: any = [];
  ngOnInit() {
    this._productService.dbData(3)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }

}
