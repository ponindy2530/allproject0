import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-group123-sw',
  templateUrl: './group123-sw.component.html',
  styleUrls: ['./group123-sw.component.css']
})
export class Group123SwComponent implements OnInit {

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
  loading: any;
  ngOnInit() {
    this.loading = true;
    //FTE2(สายสนับสนุน/Back Office(อำนวยการ) 
    this._productService.dbData(94)
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


  }

  colk: any;
  hc: string;
  clickcolk(k: number, hcode: string) {
    this.colk = k;
    this.hc = hcode;
    this._productService.dbData1(85, hcode)
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
  idtb: number;
  clickshow(j: number, hcode: string) {
    console.log(j);
    if (j >= 7 && j <= 10 || j >= 14 && j <= 17) {
      if (j == 7 || j == 14) {
        if (j == 7) {
          this.idtb = 95;
        } else {
          this.idtb = 96;
        }
        this.type = "3";
      } else if (j == 8 || j == 15) {
        if (j == 8) {
          this.idtb = 95;
        } else {
          this.idtb = 96;
        }
        this.type = "5";
      } else if (j == 9 || j == 16) {
        if (j == 9) {
          this.idtb = 95;
        } else {
          this.idtb = 96;
        }
        this.type = "4";
      } else if (j == 10 || j == 17) {
        if (j == 10) {
          this.idtb = 95;
        } else {
          this.idtb = 96;
        }
        this.type = "3,5,4";
      }

    } else {
      if (j == 21) {
        this.type = "1";
      } else if (j == 22) {
        this.type = "2";
      } else if (j == 23) {
        this.type = "3";
      } else if (j == 24) {
        this.type = "5";
      } else if (j == 25) {
        this.type = "4";
      } else if (j == 26) {
        this.type = "1,2,3,5,4";
      }
      this.idtb = 97;
    }
    console.log(this.idtb + "-" + this.type + '-' + hcode);
    this._productService.dbData2(this.idtb, this.type, hcode)
      .subscribe(resproducts => this.models3 = resproducts,
      err => console.log(err)
      // , () => { }
      );

  }

  getres() {
    this.colk = 9999;
    this.ngOnInit()
  }

}