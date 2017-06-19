import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-group1-sso',
  templateUrl: './group1-sso.component.html',
  styleUrls: ['./group1-sso.component.css']
})
export class Group1SsoComponent implements OnInit {
  modelsh: any;
  models1h: any;
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) {
    this.modelsh = [
      { t1: 't1', t3: 't3', t5: 't5', t4: 't4', tall: 'tall' }
    ];
    this.models1h = [
      { a: 'a' }
    ];

  }

  models: any;
  models1: any;
  models2: any;
  ngOnInit() {
    this.hc = undefined;
    //สายสนับสนุน สอ ทั้งหมด
    this._productService.dbData(71)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );

    //สายสนับสนุน ในอำเภอ
    this._productService.dbData(72)
      .subscribe(resproducts => this.models1 = resproducts,
      err => console.log(err)
      // , () => { }
      );

    //FTE2(สายสนับสนุน/Back Office(อำนวยการ) 
    this._productService.dbData(108)
      .subscribe(resproducts => this.models2 = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }

  colk: any;
  hc: string;
  clickcolk(k: number, hcode: string) {
    this.colk = k;
    this.hc = hcode;
    this._productService.dbData1(73, hcode)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }


  coli: any;
  clickcoli(i: number) {
    this.coli = i;
  }
  type: string;
  models3: any;
  clickshow(j: number, idpos: string, hcode: string) {
    console.log(hcode);

    if (j == 2) {
      this.type = "1";
    } else if (j == 3) {
      this.type = "3";
    } else if (j == 4) {
      this.type = "5";
    } else if (j == 5) {
      this.type = "4";
    } else if (j == 6) {
      this.type = "1,3,5,4";
    }
    if (hcode == undefined) {
      this._productService.dbData2(74, this.type, idpos)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else {
      this._productService.dbData3(75, this.type, idpos, hcode)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    }

  }

  getres() {
    this.colk = 9999;
    this.ngOnInit()
  }

  colk2: number;
  clickcolk2(k2: number, hcode: string) {
    this.colk2 = k2;
    this._productService.dbData1(136, hcode)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );


    this._productService.dbData1(137, hcode)
      .subscribe(resproducts => this.models1 = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }

}
