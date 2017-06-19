import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ProductService } from '../service/service';
import { Router } from '@angular/router';
import { Dataservice } from '../service/dataservice';
import { Login } from '../service/model';
import { Message } from 'primeng/primeng';
import { C_pis } from '../../shared/service/model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model2 = new C_pis();//เปลี่ยน
  title = "ระบบครุภัณฑ์";
  msgs: Message[] = [];
  model = new Login();
  @Input() lg: boolean = false;
  isLogin = false;
  tbl: any = "c_pis";//เปลี่ยน
  fd: any = "id";//เปลี่ยน'
  updataId: any;
  pd: any;
  constructor(private _productService: ProductService, private router: Router, public _dt: Dataservice) { }

  ngOnInit() {
    if (this._dt.isLog) {
      this.router.navigate(['Repair']);

    } else {
      this.router.navigate(['Login']);
    }
  }

  models: any;
  models1: any;
  models2: any;
  models10: any;
  models11: any;
  models104: any;
  addmodel: any;
  save() {
    this.msgs = [];
    let users = this.model.username;
    let passw = this.model.password;
    this._productService.dbData1(71, users)
      .subscribe(resproducts => this.models10 = resproducts[0],
      err => console.log(err)
      , () => {

        if (this.models10.a >= 1) {

          this._productService.dbData1(72, users)
            .subscribe(resproducts => this.models11 = resproducts[0],
            err => console.log(err)
            , () => {
              if (this.models11.a >= 1) {
                this.cklogin(401);
              } else {
                this._productService.dbData1(73, users)
                  .subscribe(resproducts => this.models104 = resproducts,
                  err => console.log(err)
                  , () => {
                    this.model2 = this.models104[0];
                    this.updataId = 0;
                    this.pd = this.model2;
                    if (this.models104[0].hcode == "00024" && this.models104[0].cid.length == 13) {
                      this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
                        .subscribe(resproducts => this.addmodel = resproducts,
                        err => console.log(err),
                        () => {
                          this._productService.dbData1(72, users)
                            .subscribe(resproducts => this.models11 = resproducts[0],
                            err => console.log(err)
                            , () => {
                              if (this.models11.a >= 1) {
                                this.cklogin(401);
                              } else {
                                return false;
                              }
                            }
                            );
                        }
                        );
                    } else {
                      this.msgs = [];
                      this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'ท่านไม่ใช่บุคลากรในสสจ.' });
                      return false;
                    }
                  }
                  );
              }

            }
            );

        } else {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'ไม่มีเลขประจำตัวประชาชนในระบบ' });
          return false;
        }
      }
      );

  }
  cklogin(idok: number) {
    if (idok == 401) {
      this._productService.dbData2(41, this.model.username, this.model.password)
        .subscribe(resproducts => this.models = resproducts[0],
        err => console.log(err)
        , () => {
          // console.log(this.models1.b);
          if (this.models.b >= 1) {
            this._productService.dbData1(40, this.model.username)
              .subscribe(resproducts => this.models1 = resproducts,
              err => console.log(err)
              , () => {
                Dataservice.isLogin = true;
                this._dt.isLog = true;
                this.isLogin = true;
                this._dt.profile = this.models1;
                if (this._dt.profile[0].hcode == '00024') {
                  if (this._dt.profile[0].confirm == '1') {
                    if (this._dt.profile[0].status == 3 && this._dt.profile[0].hcode == '00024') {
                      this.router.navigate(['Homeuser']);
                    } else if (this._dt.profile[0].status == 1 && this._dt.profile[0].hcode == '00024' || this._dt.profile[0].status == 2 && this._dt.profile[0].hcode == '00024') {
                      this.router.navigate(['Homeuser']);
                    } else {
                      this.router.navigate(['Homeuser']);
                    }
                  } else {
                    this.router.navigate(['Ckrgt']);
                  }

                } else {
                  this.isLogin = false;
                  Dataservice.isLogin = false;
                  Dataservice.loguser = false;
                  this._dt.isLog = false;
                  this._dt.setup();
                  this.msgs = [];
                  this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'ท่านไม่ใช่บุคลากรในสสจ.' });
                  return false;
                }
              }
              );
          } else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'รหัสผ่านไม่ถูกต้อง' });
            return false;
          }
        }
        );
    } else {
      return false;
    }

  }

}
