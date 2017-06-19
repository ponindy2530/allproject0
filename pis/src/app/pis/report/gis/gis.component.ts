import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.css']
})
export class GisComponent implements OnInit {

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
  loading: any;
  ngOnInit() {
    this.hc = undefined;
    this.loading = true;
    //FTE2(สายสนับสนุน/Back Office(อำนวยการ) 
    this._productService.dbData(107)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        //จำนวนสายสนับสนุนกลุ่ม 1 รพ
        this._productService.dbData(84)
          .subscribe(resproducts => this.models1 = resproducts,
          err => console.log(err)
          , () => {
            this.loading = false;
          }
          );
      }
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
    this.loading = true;
    this._productService.dbData1(109, hcode)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        this.loading = false;
      }
      );
  }


  coli: any;
  clickcoli(i: number) {
    this.coli = i;
  }
  type: string;
  models3: any;
  idtb: number;
  idpos: string;
  clickshow(j: number, hcode: string, hcodetype: string) {
    if (j >= 4 && j <= 8) {
      if (j == 4) {
        this.type = "1,3,4";
        this.idpos = "1";
      } else if (j == 5) {
        this.type = "1,3,4";
        this.idpos = "2";
      } else if (j == 6) {
        this.type = "1,3,4";
        this.idpos = "3";
      } else if (j == 7) {
        this.type = "1,3,4";
        this.idpos = "4";
      } else {
        this.type = "1,3,4";
        this.idpos = "1,2,3,4";
      }
      if (hcodetype == undefined) {
        this.idtb = 110;
      } else {
        this.idtb = 111;
      }

    } else if (j >= 11 && j <= 19) {
      if (j == 11) {
        this.type = "1";
        this.idpos = "62503";
      } else if (j == 12) {
        this.type = "3";
        this.idpos = "62503";
      } else if (j == 13) {
        this.type = "4";
        this.idpos = "62503";
      } else if (j == 14) {
        this.type = "1,3,4";
        this.idpos = "62503";
      } else if (j == 15) {
        this.type = "1";
        this.idpos = "63503";
      } else if (j == 16) {
        this.type = "3";
        this.idpos = "63503";
      } else if (j == 17) {
        this.type = "4";
        this.idpos = "63503";
      } else if (j == 18) {
        this.type = "1,3,4";
        this.idpos = "63503";
      } else {
        this.type = "1,3,4";
        this.idpos = "62503,63503";
      }
      if (hcodetype == undefined) {
        this.idtb = 112;
      } else {
        this.idtb = 113;
      }
    } else if (j >= 23 && j <= 31) {
      if (j == 23) {
        this.type = "1";
        this.idpos = "61523";
      } else if (j == 24) {
        this.type = "3";
        this.idpos = "61523";
      } else if (j == 25) {
        this.type = "4";
        this.idpos = "61523";
      } else if (j == 26) {
        this.type = "1,3,4";
        this.idpos = "61523";
      } else if (j == 27) {
        this.type = "1";
        this.idpos = "62601";
      } else if (j == 28) {
        this.type = "3";
        this.idpos = "62601";
      } else if (j == 29) {
        this.type = "4";
        this.idpos = "62601";
      } else if (j == 30) {
        this.type = "1,3,4";
        this.idpos = "62601";
      } else {
        this.type = "1,3,4";
        this.idpos = "61523,62601";
      }
      if (hcodetype == undefined) {
        this.idtb = 112;
      } else {
        this.idtb = 113;
      }
    } else if (j >= 35 && j <= 43) {
      if (j == 35) {
        this.type = "1";
        this.idpos = "62802";
      } else if (j == 36) {
        this.type = "3";
        this.idpos = "62802";
      } else if (j == 37) {
        this.type = "4";
        this.idpos = "62802";
      } else if (j == 38) {
        this.type = "1,3,4";
        this.idpos = "62802";
      } else if (j == 39) {
        this.type = "1";
        this.idpos = "62504";
      } else if (j == 40) {
        this.type = "3";
        this.idpos = "62504";
      } else if (j == 41) {
        this.type = "4";
        this.idpos = "62504";
      } else if (j == 42) {
        this.type = "1,3,4";
        this.idpos = "62504";
      } else {
        this.type = "1,3,4";
        this.idpos = "62802,62504";
      }
      if (hcodetype == undefined) {
        this.idtb = 112;
      } else {
        this.idtb = 113;
      }
    } else if (j >= 47 && j <= 55) {
      if (j == 47) {
        this.type = "1";
        this.idpos = "60414";
      } else if (j == 48) {
        this.type = "3";
        this.idpos = "60414";
      } else if (j == 49) {
        this.type = "4";
        this.idpos = "60414";
      } else if (j == 50) {
        this.type = "1,3,4";
        this.idpos = "60414";
      } else if (j == 51) {
        this.type = "1";
        this.idpos = "62600";
      } else if (j == 52) {
        this.type = "3";
        this.idpos = "62600";
      } else if (j == 53) {
        this.type = "4";
        this.idpos = "62600";
      } else if (j == 54) {
        this.type = "1,3,4";
        this.idpos = "62600";
      } else {
        this.type = "1,3,4";
        this.idpos = "60414,62600";
      }
      if (hcodetype == undefined) {
        this.idtb = 112;
      } else {
        this.idtb = 113;
      }
    } else {
      if (j == 59) {
        this.type = "1";
        this.idpos = "62503,63503,61523,62601,62802,62504,60414,62600";
      } else if (j == 60) {
        this.type = "3";
        this.idpos = "62503,63503,61523,62601,62802,62504,60414,62600";
      } else if (j == 61) {
        this.type = "4";
        this.idpos = "62503,63503,61523,62601,62802,62504,60414,62600";
      } else {
        this.type = "1,3,4";
        this.idpos = "62503,63503,61523,62601,62802,62504,60414,62600";
      }
      if (hcodetype == undefined) {
        this.idtb = 112;
      } else {
        this.idtb = 113;
      }
    }

    if (hcodetype == undefined) {
      this._productService.dbData3(this.idtb, this.type, this.idpos, hcode)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else {
      this._productService.dbData3(this.idtb, this.type, this.idpos, hcode)
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
