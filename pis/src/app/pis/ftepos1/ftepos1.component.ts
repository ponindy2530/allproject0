import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ftepos1',
  templateUrl: './ftepos1.component.html',
  styleUrls: ['./ftepos1.component.css']
})
export class Ftepos1Component implements OnInit {

  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) { }
  models: any;
  haername: any;
  idpos2: any;
  loading: any;
  keypos: any;
  models2: any;
  ngOnInit() {
    this.loading = true;
    this.haername = "รวมทั้งหมดทุกตำแหน่ง(FTE2)";
    this.idpos2 = 1;
    this.keypos = 0;
    this._productService.dbData(153)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        this.loading = false;
      }
      );

    this._productService.dbData(132)
      .subscribe(resproducts => this.models2 = resproducts,
      err => console.log(err)
      , () => {
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
  clickshow(j: number, hcode: string, idp: any, kpo: any) {
    if (idp == 1) {
      if (kpo == 0) {
        this.idpos = "60104,60204,60603,61523,62601,82950,62212,60413,62602,61803,62603,61723,61724,61914,62802,62504,61204,61203,62312,60813,60802,62604,60414,12003,12304,32512,32523,62803,62600,63503,62503";
      } else if (kpo == 1) {
        this.idpos = "60104";
      } else if (kpo == 2) {
        this.idpos = "60204";
      } else if (kpo == 3) {
        this.idpos = "60603";
      } else if (kpo == 8) {
        this.idpos = "61914";
      } else if (kpo == 11) {
        this.idpos = "62312";
      } else {
        this.idpos = "62803";
      }
      if (j == 7) {
        this.type = "1";
        this.idtb = 127;
      } else if (j == 8) {
        this.type = "2";
        this.idtb = 127;
      } else if (j == 9) {
        this.type = "3";
        this.idtb = 127;
      } else if (j == 10) {
        this.type = "5";
        this.idtb = 127;
      } else if (j == 11) {
        this.type = "4";
        this.idtb = 127;
      } else if (j == 12) {
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 13) {
        this.type = "6";
        this.idtb = 127;
      } else {
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      }
    } else if (idp == 2) {
      if (j == 7 || j == 15) {
        if (j == 7) {
          if (kpo == 4) {
            this.idpos = "61523";
          } else if (kpo == 6) {
            this.idpos = "61803";
          } else if (kpo == 7) {
            this.idpos = "61723";
          } else if (kpo == 10) {
            this.idpos = "61204";
          } else if (kpo == 12) {
            this.idpos = "60813";
          } else if (kpo == 15) {
            this.idpos = "32512";
          } else {
            this.idpos = "62503";
          }
        } else {
          if (kpo == 4) {
            this.idpos = "62601";
          } else if (kpo == 6) {
            this.idpos = "62603";
          } else if (kpo == 7) {
            this.idpos = "61724";
          } else if (kpo == 10) {
            this.idpos = "61203";
          } else if (kpo == 12) {
            this.idpos = "60802";
          } else if (kpo == 15) {
            this.idpos = "32512";
          } else {
            this.idpos = "62503";
          }
        }
        this.type = "1";
        this.idtb = 127;
      } else if (j == 8 || j == 16) {
        if (j == 8) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "2";
        this.idtb = 127;
      } else if (j == 9 || j == 17) {
        if (j == 9) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "3";
        this.idtb = 127;
      } else if (j == 10 || j == 18) {
        if (j == 10) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "5";
        this.idtb = 127;
      } else if (j == 11 || j == 19) {
        if (j == 11) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "4";
        this.idtb = 127;
      } else if (j == 12 || j == 20) {
        if (j == 12) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      } else if (j == 13 || j == 21) {
        if (j == 13) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "6";
        this.idtb = 127;
      } else if (j == 14 || j == 22) {
        if (j == 14) {
          this.idpos = "61523";
        } else {
          this.idpos = "62601";
        }
        this.type = "1,2,3,4,5,6";
        this.idtb = 128;
      } else {
        this.idpos = "61523,62601";
        this.type = "1,2,3,4,5";
        this.idtb = 127;
      }
    }

    this._productService.dbData3(this.idtb, this.type, this.idpos, hcode)
      .subscribe(resproducts => this.models3 = resproducts,
      err => console.log(err)
      // , () => { }
      );

  }
  keydb: any;
  getmpos(ev: any) {
    this.loading = true;
    if (ev.numpos == 1) {
      this.loading = true;
      this.keydb = ev.dbkey;
      this.haername = ev.headname_mini;
      this.idpos2 = ev.numpos;
      this.keypos = ev.id;

    } else if (ev.numpos == 2) {
      this.keydb = ev.dbkey;
      this.haername = ev.headname_mini.split('/');
      this.idpos2 = ev.numpos;
      this.keypos = ev.id;

    } else if (ev.numpos == 3) {
      this.keydb = ev.dbkey;
      this.haername = ev.headname_mini.split('/');
      this.idpos2 = ev.numpos;
      this.keypos = ev.id;

    } else {
      this.keydb = ev.dbkey;
      this.haername = ev.headname_mini.split('/');
      this.idpos2 = ev.numpos;
      this.keypos = ev.id;
    }

    this._productService.dbData(this.keydb)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        this.loading = false;
      }
      );

  }

  getres() {
    this.ngOnInit()
  }
}  
