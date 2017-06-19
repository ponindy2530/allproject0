import { Component, OnInit } from '@angular/core';
import { Hst_room } from '../../../shared/service/model';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
import { Router } from '@angular/router';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  model = new Hst_room();
  datastroom: any = [];
  datastyh: any = [];
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router, private confirmationService: ConfirmationService) {
    this.datastroom = [
      { id: 1, nstroom: 'ห้องทั่วไป' },
      { id: 2, nstroom: 'ห้องจำกัดสิทธิ์' }
    ];

    this.datastyh = [
      { id: 1, nstyh: 'Youtube' },
      { id: 2, nstyh: 'Hangouts' }
    ];
  }
  models: any = [];
  models1: any = [];
  ngOnInit() {

    if (this._dt.isLog) {
      if (this._dt.profile[0].a == 1) {
        this.updataId = 0;
        //กลุ่มงาน/ฝ่าย
        this._productService.dbData(7)
          .subscribe(resproducts => this.models = resproducts,
          err => console.log(err)
          // , () => {
          //   console.log(this.models);

          //  }
          );

        this._productService.dbData(2)
          .subscribe(resproducts => this.models1 = resproducts,
          err => console.log(err)
          // , () => { }
          );
      } else {
        this.router.navigate(['Dashboard']);
      }
    } else {
      this.router.navigate(['Login']);
    }

  }

  updataId: any;
  pd: any;
  tbl: any = "hst_room";//เปลี่ยน
  fd: any = "id";//เปลี่ยน'
  addmodel: any = [];

  save() {
    // this.model.cid = this._dt.profile[0].CID;
    // console.log(this.model);
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        alert("ระบบทำการบันทึกข้อมูล เรียบร้อยแล้ว");
        this.model = new Hst_room();
        this.ngOnInit();
      }
      );
  }

  edit(ev: any) {
    this.model = ev;
    this.updataId = this.model.id;
  }

  del: any;
  delete(ev: any) {
    this.confirmationService.confirm({
      message: 'ถ้าใช่กด YES ถ้าไม่ใช่กด NO',
      header: 'ท่านต้องการลบข้อมูลใช่หรือไม่',
      icon: 'fa fa-trash',
      accept: () => {
        this.updataId = ev.id;
        this._productService.delData(this.tbl, this.fd, this.updataId)
          .subscribe(resproducts => this.del = resproducts,
          err => console.log(err),
          () => {
            alert("ระบบทำการลบข้อมูล เรียบร้อยแล้ว");
            this.ngOnInit();
          }
          );
      }
    });
  }


}
