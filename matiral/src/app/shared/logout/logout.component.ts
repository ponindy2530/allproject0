import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dataservice } from '../service/dataservice';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  isLogin: any;
  constructor(private router: Router, public _dt: Dataservice) { }

  ngOnInit() {
    if (this._dt.isLog) {
      this.isLogin = false;
      Dataservice.isLogin = false;
      Dataservice.loguser = false;
      this._dt.isLog = false;
      this._dt.setup();
      this.router.navigate(['Login']);
    } else {
      this.router.navigate(['Login']);
    }
  }

}
