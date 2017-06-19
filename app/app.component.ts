import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "ระบบครุภัณฑ์ V4.0";


  constructor(private router: Router) { }
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

  }

  atou(str) {
    return window.atob(str.replace('=', ''));
  }

  utoa(str) {
    return window.btoa(str).replace('=', '');
  }




  getAddnew() {
    let id = this.utoa(0);
    this.router.navigate(['Addnew/' + id]);
  }
}