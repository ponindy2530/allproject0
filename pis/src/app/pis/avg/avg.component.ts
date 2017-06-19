import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avg',
  templateUrl: './avg.component.html',
  styleUrls: ['./avg.component.css']
})
export class AvgComponent implements OnInit {

  modelsh: any;
  models1h: any;
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
  models4: any;
  loading: any;
  ngOnInit() {
    this.id = undefined;
    this.loading = true;
    this.colk = 0;
    //จังหวัดทั้งหมด
    this._productService.dbData(138)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        //ภาพรวมตำแหน่ง
        this._productService.dbData(139)
          .subscribe(resproducts => this.models1 = resproducts,
          err => console.log(err)
          , () => {
            this.loading = false;
          }
          );
      }
      );
  }

  colk: any;
  xx: any;
  // hc: string;
  clickcolk(k: number) {
    this.colk = k;
    if (k >= 1) {
      this.xx = 140;
    } else {
      this.xx = 138;
    }
    this._productService.dbData(this.xx)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }


  coli: any;
  clickcoli(i: number) {
    this.coli = i;
  }

  colf: any;
  id: any;
  clickcolf(f: number, id: number) {
    this.colf = f;
    this.id = id;
    this._productService.dbData1(90, id)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );

    this._productService.dbData1(91, id)
      .subscribe(resproducts => this.models1 = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }
  type: string;
  models3: any;
  clickshow(j: number, idpos: string, hcode: string) {
    if (j == 2) {
      this.type = "1";
    } else if (j == 3) {
      this.type = "2";
    } else if (j == 4) {
      this.type = "3";
    } else if (j == 5) {
      this.type = "5";
    } else if (j == 6) {
      this.type = "4";
    } else if (j == 7) {
      this.type = "6";
    } else if (j == 8) {
      this.type = "1,2,3,5,4,6";
    }
    if (hcode == undefined) {
      this._productService.dbData2(92, this.type, idpos)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else {
      if (hcode == "9999") {
        this._productService.dbData2(135, this.type, idpos)
          .subscribe(resproducts => this.models3 = resproducts,
          err => console.log(err)
          // , () => { }
          );
      } else {
        this._productService.dbData3(93, this.type, idpos, hcode)
          .subscribe(resproducts => this.models3 = resproducts,
          err => console.log(err)
          // , () => { }
          );
      }

    }

  }

  getres() {
    this.colk = 9999;
    this.ngOnInit()
  }
  colk2: number;
  clickcolk2(k2: number, hcode: string) {
    this.id = 9999;
    this.colk2 = k2;
    this._productService.dbData1(133, hcode)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );


    this._productService.dbData1(134, hcode)
      .subscribe(resproducts => this.models1 = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }
  avg(a1: any, a2: any) {
    console.log(a1 + a2);

  }
}
