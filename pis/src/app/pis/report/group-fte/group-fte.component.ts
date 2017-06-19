import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
@Component({
  selector: 'app-group-fte',
  templateUrl: './group-fte.component.html',
  styleUrls: ['./group-fte.component.css']
})
export class GroupFteComponent implements OnInit {

  modelsh: any;
  models1h: any;
  constructor(private _productService: ProductService, public _dt: Dataservice) {
    this.modelsh = [
      { t1: 't1', t2: 't2', t3: 't3', t5: 't5', t4: 't4', nvstdtall: 'nvstdtall', t6: 't6', nstdtall: 'nstdtall', stdall: 'stdall', tall: 'tall' }
    ];
    this.models1h = [
      { a: 'a' }
    ];

  }

  models: any;
  models1: any;
  ngOnInit() {

    //fte แยกรายสถานบริการ
    this._productService.dbData(98)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );

    //จำนวน fte แยกรายสถานบริการ
    this._productService.dbData(99)
      .subscribe(resproducts => this.models1 = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }

  colk: any;
  hc: string;
  clickcolk(k: number, hcode: string) {
    this.colk = k;
    this.hc = hcode;
    this._productService.dbData1(100, hcode)
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
  clickshow(j: number, idpos: string, hcode: string) {
    if (j != 10 && j != 11) {
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
        this.type = "1,2,3,5,4";
      } else if (j == 8) {
        this.type = "6";
      } else if (j == 9) {
        this.type = "1,2,3,5,4,6";
      }
      if (hcode == undefined) {
        this.idtb = 101;
      } else {
        this.idtb = 104;
      }
    } else {
      if (j == 10) {
        if (hcode == undefined) {
          this.idtb = 102;
        } else {
          this.idtb = 105;
        }
      } else {
        if (hcode == undefined) {
          this.idtb = 103;
        } else {
          this.idtb = 106;
        }
      }
      this.type = "1,2,3,5,4,6";
    }

    if (hcode == undefined) {
      this._productService.dbData2(this.idtb, this.type, idpos)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else {
      this._productService.dbData3(this.idtb, this.type, idpos, hcode)
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
