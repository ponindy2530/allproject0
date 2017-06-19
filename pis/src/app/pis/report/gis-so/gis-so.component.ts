import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gis-so',
  templateUrl: './gis-so.component.html',
  styleUrls: ['./gis-so.component.css']
})
export class GisSoComponent implements OnInit {

  modelsh: any;
  models1h: any;
  quantity: number = 1;
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) {
    this.modelsh = [
      { t1: 't1', t2: 't2', t3: 't3', t5: 't5', t4: 't4', t6: 't6', tall: 'tall' }
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
    this.test1 = undefined;
    this.test2 = undefined;
    // this.hc2 = undefined;
    //FTE2(สายสนับสนุน/Back Office(อำนวยการ) 
    this.loading = true;
    this._productService.dbData(114)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        //จำนวนสายสนับสนุนกลุ่ม 1 รพ
        this._productService.dbData(115)
          .subscribe(resproducts => this.models1 = resproducts,
          err => console.log(err)
          , () => {
            this.loading = false;
          }
          );
      }
      );

    this._productService.dbData(108)
      .subscribe(resproducts => this.models2 = resproducts,
      err => console.log(err)
      // , () => { }
      );


  }

  colk: any;
  hc: string;
  loading: any;
  clickcolk(k: number, hcode: string) {
    this.colk = k;
    this.hc = hcode;
    this.test1 = hcode;
    this.test2 = undefined;
    this.loading = true;
    this._productService.dbData1(117, hcode)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        this._productService.dbData1(118, hcode)
          .subscribe(resproducts => this.models1 = resproducts,
          err => console.log(err)
          , () => {
            this.loading = false;
          }
          );
      }
      );


  }


  coli: any;
  test1: any;
  test2: any;
  clickcoli(i: number, hcode: string, hcodetype: string) {
    this.coli = i;
    this.test2 = hcode;
    if (hcodetype == undefined) {
      this._productService.dbData1(116, hcode)
        .subscribe(resproducts => this.models1 = resproducts,
        err => console.log(err)
        // , () => {}
        );
    } else {
      this._productService.dbData1(119, hcode)
        .subscribe(resproducts => this.models1 = resproducts,
        err => console.log(err)
        // , () => {}
        );
    }

  }
  type: string;
  models3: any;
  idtb: number;
  clickshow(j: number, hcode: string, hcodetype: string) {
    if (j == 6) {
      this.type = "1";
    } else if (j == 7) {
      this.type = "2";
    } else if (j == 8) {
      this.type = "3";
    } else if (j == 9) {
      this.type = "5";
    } else if (j == 10) {
      this.type = "4";
    } else {
      this.type = "1,2,3,4,5";
    }

    if (hcodetype == undefined) {
      this._productService.dbData2(120, this.type, hcode)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else {
      this._productService.dbData2(121, this.type, hcode)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    }


  }
  colki: any;
  clickcolki(ki: number, idpos: string, hcodetype: string, hcodetype2: string) {
    this.colki = ki;
    // console.log(hcodetype + "hcodetype");
    // console.log(hcodetype2 + "hcodetype2");
    // console.log(idpos);

    if (hcodetype == undefined && hcodetype2 == undefined) {
      this._productService.dbData1(122, idpos)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else if (hcodetype == undefined && hcodetype2 != undefined) {
      this._productService.dbData2(123, idpos, hcodetype2)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else if (hcodetype != undefined && hcodetype2 == undefined) {
      this._productService.dbData2(124, idpos, hcodetype)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else {
      this._productService.dbData2(125, idpos, hcodetype2)
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

}
