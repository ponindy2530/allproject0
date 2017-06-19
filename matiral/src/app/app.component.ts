import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './shared/service/service';
import { Dataservice } from './shared/service/dataservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "ระบบครุภัณฑ์ V4.0";

  models107: any;
  cc: any;
  a: any;
  constructor(private router: Router, private _productService: ProductService, public _dt: Dataservice) { }
  // appmanu = [
  //   {
  //     btnid: 1,
  //     btna: '/logout',
  //     btnname: 'ออกจากระบบ',
  //     btnicon: 'btn btn-default pull-right',
  //     icon: 'fa fa-unlock'
  //   },
  //   {
  //     btnid: 2,
  //     btna: '/login',
  //     btnname: 'เข้าสู่ระบบ',
  //     btnicon: 'btn btn-primary pull-right',
  //     icon: 'fa fa-lock'

  //   }

  // ];


  ngOnInit() {
    // if (localStorage.getItem('token') != '') {
    //   this.cklogin = false;
    //   // console.log('ออก');

    // } else {
    //   this.cklogin = true;
    //   // console.log('เข้า');
    // }
    // // this.test = localStorage.getItem('token');
    // // this.test = localStorage.getItem('username');
    // localStorage.removeItem('token');
    // localStorage.removeItem('username');
    // console.log(this.test);
    //จำนวนกำลังดำเนินการ
    this._productService.dbData(70)
      .subscribe(resproducts => this.models107 = resproducts[0],
      err => console.log(err)
      , () => {
        this.cc = this.models107.cc;
        this.a = this.models107.a;
      }
      );

  }
}

