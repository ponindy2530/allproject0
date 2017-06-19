import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../shared/service/service';
import { Router } from '@angular/router';
import { Pmotest } from '../../shared/service/model';
@Component({
  selector: 'app-pmo',
  templateUrl: './pmo.component.html',
  styleUrls: ['./pmo.component.css']
})
export class PmoComponent implements OnInit {

  model = new Pmotest();


  constructor(private _productService: ProductService) { }
  models: any;
  ngOnInit() {
    this.updataId = 0;
    this._productService.dbData(109)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }

  updataId: any;
  pd: any;
  tbl: any = "pmotest";//เปลี่ยน
  fd: any = "id";//เปลี่ยน'
  addmodel: any;
  save() {
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        alert("ระบบทำการบันทึกข้อมูลเรียบร้อยแล้ว");
        this.model = new Pmotest();
        this.ngOnInit();
      }
      );
  }


  del: any;
  delete(ev: any) {
    if (confirm('ท่านต้องการจะลบข้อมูลใช่หรือไม่')) {
      this.updataId = ev.id;
      this._productService.delData(this.tbl, this.fd, this.updataId)
        .subscribe(resproducts => this.del = resproducts,
        err => console.log(err),
        () => {
          alert('ระบบทำการลบข้อมูลเรียบร้อยแล้ว');
          this.ngOnInit();
        }
        );
    }
  }

  edit(ev: any) {
    this.model = ev;
    this.updataId = this.model.id;
  }


}
