import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fte-hot',
  templateUrl: './fte-hot.component.html',
  styleUrls: ['./fte-hot.component.css']
})
export class FteHotComponent implements OnInit {

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
  loading: any;
  ngOnInit() {
    this.hc = "10970";
    this.colk = 0;
    this.loading = true;
    //สายสนับสนุน สอ ทั้งหมด
    this._productService.dbData1(130, 10970)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        
        //สายสนับสนุน ในอำเภอ
        this._productService.dbData(131)
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
    console.log(k);

    this.colk = k;
    this.hc = hcode;
    this._productService.dbData1(130, hcode)
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
  idtb: any;
  clickshow(j: number, idpos: string, hcode: string) {
    // console.log(hcode);
    if (j == 4) {
      this.type = "1";
      this.idtb = 127;
    } else if (j == 5) {
      this.type = "2";
      this.idtb = 127;
    } else if (j == 6) {
      this.type = "3";
      this.idtb = 127;
    } else if (j == 7) {
      this.type = "5";
      this.idtb = 127;
    } else if (j == 8) {
      this.type = "4";
      this.idtb = 127;
    } else if (j == 9) {
      this.type = "1,2,3,4,5";
      this.idtb = 127;
    } else if (j == 10) {
      this.type = "6";
      this.idtb = 127;
    } else if (j == 11) {
      this.type = "1,2,3,4,5,6";
      this.idtb = 128;
    } else {
      this.type = "1,2,3,4,5,6";
      this.idtb = 128;
    }
    this._productService.dbData3(this.idtb, this.type, idpos, hcode)
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

