import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
import { Login } from '../service/model';
import { Message } from 'primeng/primeng';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "ข้อมูลบุคลากร";
  model = new Login();
  msgs: Message[] = [];
  @Input() lg: boolean = false;
  isLogin = false;
  constructor(private router: Router, private _productService: ProductService, public _dt: Dataservice) { }
  models5: any;
  ngOnInit() {
    if (this._dt.isLog) {
      this.router.navigate(['Homeuser']);

    } else {
      this._productService.dbData(147)
        .subscribe(resproducts => this.models5 = resproducts,
        err => console.log(err)
        // , () => {}
        );
    }
  }
  models: any;
  models1: any;
  save() {
    let users = this.model.username;
    let passw = this.model.password;
    // console.log(users + passw);
    this._productService.dbData2(148, users, passw)
      .subscribe(resproducts => this.models = resproducts[0],
      err => console.log(err)
      , () => {
        // console.log(this.models.a);
        if (this.models.a >= 1) {
          this._productService.dbData2(149, users, passw)
            .subscribe(resproducts => this.models1 = resproducts,
            err => console.log(err)
            , () => {
              // console.log(this.models1);
              Dataservice.isLogin = true;
              this._dt.isLog = true;
              this.isLogin = true;
              this._dt.profile = this.models1;
              // console.log(this._dt.profile);
              this.router.navigate(['Homeuser']);
            }
            );
        } else {
          this.msgs = [];
          this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'รหัสผ่านไม่ถูกต้อง' });
          return false;
        }
      }
      );

  }

}
