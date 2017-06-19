import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) {

  }
  models: any;
  models1: any;
  models2: any;
  models3: any;
  ngOnInit() {
    //ฝ่าย
    this._productService.dbData(89)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );
    //ประเภท
    this._productService.dbData(90)
      .subscribe(resproducts => this.models1 = resproducts,
      err => console.log(err)
      // , () => { }
      );
    //ชนิด
    this._productService.dbData(91)
      .subscribe(resproducts => this.models3 = resproducts,
      err => console.log(err)
      // , () => { }
      );

    //ครุภัณฑ์
    this._productService.dbData(18)
      .subscribe(resproducts => this.models2 = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }

}
