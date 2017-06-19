import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
import { C_mcgroup } from '../../shared/service/model';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import * as _ from "lodash";

@Component({
  selector: 'app-openroom',
  templateUrl: './openroom.component.html',
  styleUrls: ['./openroom.component.css']
})
export class OpenroomComponent implements OnInit {
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router, private confirmationService: ConfirmationService) { }
  models: any;
  model1: any;
  ngOnInit() {

    this._productService.dbData(107)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => {
      //   console.log(this.models);

      // }
      );
    // this._productService.dbData(101)
    //   .subscribe(resproducts => this.model1 = resproducts,
    //   err => console.log(err)
    //   // , () => {
    //   //   console.log(this.models);

    //   // }
    //   );
  }

  utoa(str) {
    return window.btoa(str).replace('=', '');
  }

  atou(str) {
    return window.atob(str.replace('=', ''));
  }

  getlock(ev: any) {
    // console.log(ev);
    if (this._dt.isLog) {
      let id = this.utoa(ev.ID);
      this.router.navigate(['Home/' + id]);
    } else {
      alert('กรุณา Login เพื่อเข้าสู่ระบบ');
      this.router.navigate(['Login']);
    }
  }



}
