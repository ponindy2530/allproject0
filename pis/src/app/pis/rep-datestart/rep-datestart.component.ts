import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rep-datestart',
  templateUrl: './rep-datestart.component.html',
  styleUrls: ['./rep-datestart.component.css']
})
export class RepDatestartComponent implements OnInit {
  models1h: any;
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) {
    this.models1h = [
      { a: 'a', b: 'b', ab: 'ab' },
    ];
  }
  models: any;
  models1: any;
  ngOnInit() {
    this._productService.dbData(150)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );

    this._productService.dbData(151)
      .subscribe(resproducts => this.models1 = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }

  colk2: number;
  clickcolk2(k2: number, hcode: string) {
    this.colk2 = k2;
    this._productService.dbData1(152, hcode)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );;
  }

  getres() {
    this.colk2 = 9999;
    this.ngOnInit()
  }

}
