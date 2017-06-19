import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rep-matiral',
  templateUrl: './rep-matiral.component.html',
  styleUrls: ['./rep-matiral.component.css']
})
export class RepMatiralComponent implements OnInit {
  models1h: any;
  models1h2: any;
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) {
    this.models1h = [
      { PRICE: 'PRICE' }
    ];
    this.models1h2 = [
      { EXPENS: 'EXPENS' }
    ];
  }
  models: any;
  models107: any;
  a: any;
  b: any;
  c: any;
  d: any;
  e: any;
  ngOnInit() {
    this._productService.dbData(18)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );

    this._productService.dbData(77)
      .subscribe(resproducts => this.models107 = resproducts[0],
      err => console.log(err)
      , () => {
        this.a = this.models107.a;
        this.b = this.models107.b;
        this.c = this.models107.c;
        this.d = this.models107.d;
        this.e = this.models107.e;


      }
      );

  }
  modelsev: any;
  clickshow(ev: any) {
    this._productService.dbData1(78, ev.OID)
      .subscribe(resproducts => this.modelsev = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }
  modelsev2: any;
  clickshow2(ev: any) {
    this._productService.dbData1(79, ev.OID)
      .subscribe(resproducts => this.modelsev2 = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }

}
