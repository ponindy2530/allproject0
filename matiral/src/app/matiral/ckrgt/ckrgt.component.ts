import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { C_pis } from '../../shared/service/model';
import { Message } from 'primeng/primeng';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ckrgt',
  templateUrl: './ckrgt.component.html',
  styleUrls: ['./ckrgt.component.css']
})
export class CkrgtComponent implements OnInit {

  model = new C_pis();//เปลี่ยน
  tbl: any = "c_pis";//เปลี่ยน
  fd: any = "id";//เปลี่ยน'
  pd: any;
  @Input() lg: boolean = false;
  isLogin = false;
  constructor(private router: Router, private _productService: ProductService, public _dt: Dataservice) { }

  models: any;
  models1: any;
  models2: any;
  pid: number;
  loading: any;
  ngOnInit() {
    if (this._dt.isLog) {
      if (this._dt.profile[0].confirm == '1') {
        if (this._dt.profile[0].status == 3 && this._dt.profile[0].hcode == '00024') {
          this.router.navigate(['It']);
        } else if (this._dt.profile[0].ST == 1 && this._dt.profile[0].hcode == '00024' || this._dt.profile[0].ST == 2 && this._dt.profile[0].hcode == '00024') {
          this.router.navigate(['Sup']);
        } else {
          this.router.navigate(['Repair']);
        }
      } else {
        this.loading = true;
        this._productService.dbData(24)
          .subscribe(resproducts => this.models1 = resproducts,
          err => console.log(err)
          , () => {
            this._productService.dbData1(74, this._dt.profile[0].cid)
              .subscribe(resproducts => this.models2 = resproducts[0],
              err => console.log(err)
              , () => {
                //กลุ่มงาน/ฝ่ายสสจ   
                this._productService.dbData(20)
                  .subscribe(resproducts => this.models = resproducts,
                  err => console.log(err)
                  , () => {
                    this.pid = this.models2.id;
                    this.model.c_groupssj = this._dt.profile[0].c_groupssj;
                    this.loading = false;
                  }
                  );
              }
              );
          }
          );
      }

    } else {
      this.router.navigate(['Login']);
    }

  }
  addmodel: any;
  models5; any;
  save() {
    this.model.confirm = '1';
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.pid, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        this._productService.dbData1(40, this._dt.profile[0].cid)
          .subscribe(resproducts => this.models5 = resproducts,
          err => console.log(err)
          , () => {
            this.isLogin = false;
            Dataservice.isLogin = false;
            Dataservice.loguser = false;
            this._dt.isLog = false;
            this._dt.setup();

            if (this._dt.isLog) {
              if (this._dt.profile[0].status == 3 && this._dt.profile[0].hcode == '00024') {
                this.router.navigate(['It']);
              } else if (this._dt.profile[0].status == 1 && this._dt.profile[0].hcode == '00024' || this._dt.profile[0].status == 2 && this._dt.profile[0].hcode == '00024') {
                this.router.navigate(['Sup']);
              } else {
                this.router.navigate(['Repair']);
              }
            } else {
              Dataservice.isLogin = true;
              this._dt.isLog = true;
              this.isLogin = true;
              this._dt.profile = this.models5;
              if (this._dt.profile[0].confirm == '1') {
                if (this._dt.profile[0].status == 3 && this._dt.profile[0].hcode == '00024') {
                  this.router.navigate(['It']);
                } else if (this._dt.profile[0].status == 1 && this._dt.profile[0].hcode == '00024' || this._dt.profile[0].status == 2 && this._dt.profile[0].hcode == '00024') {
                  this.router.navigate(['Sup']);
                } else {
                  this.router.navigate(['Repair']);
                }
              } else {
                this.router.navigate(['Ckrgt']);
              }
            }
          }


          );
      }
      );
  }

}
