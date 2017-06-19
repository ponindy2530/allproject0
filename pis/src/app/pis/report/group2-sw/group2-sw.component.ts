import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-group2-sw',
  templateUrl: './group2-sw.component.html',
  styleUrls: ['./group2-sw.component.css']
})
export class Group2SwComponent implements OnInit {

  modelsh: any;
  models1h: any;
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) {
    this.modelsh = [
      { t3: 't3', t5: 't5', t4: 't4', t6: 't6', tall: 'tall' }
    ];
    this.models1h = [
      { a: 'a' }
    ];

  }

  models: any;
  models1: any;
  loading: any;
  ngOnInit() {
    this.loading = true;
    //สายสนับสนุน สอ ทั้งหมด
    this._productService.dbData(80)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        //จำนวนสายสนับสนุนกลุ่ม 1 รพ
        this._productService.dbData(81)
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
  hc: string;
  clickcolk(k: number, hcode: string) {
    this.colk = k;
    this.hc = hcode;
    this._productService.dbData1(82, hcode)
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
    if (j == 2) {
      this.type = "3";
    } else if (j == 3) {
      this.type = "5";
    } else if (j == 4) {
      this.type = "4";
    } else if (j == 5) {
      this.type = "6";
    } else if (j == 6) {
      this.type = "3,5,4,6";
    }
    if (hcode == undefined) {
      this._productService.dbData2(79, this.type, idpos)
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

}
