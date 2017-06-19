import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
import { Router } from '@angular/router';
import { Hst_register } from '../../../shared/service/model';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.css']
})
export class ListRegisterComponent implements OnInit {
  model = new Hst_register();
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router, private confirmationService: ConfirmationService) { }
  models: any = [];
  loading: boolean;
  ngOnInit() {
    this._productService.dbData(8)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      , () => {
        this.loading = false;
      }
      );
  }

  updataId: any;
  pd: any;
  tbl: any = "hst_register";//เปลี่ยน
  fd: any = "id";//เปลี่ยน'
  addmodel: any = [];
  modelemail: any = [];

  edit(ev: any) {
    this.model = ev;
    // console.log(this.model);
    this.updataId = ev.id;

  }
  save() {
    // console.log(this.model);
    this.model.st = 2;
    this.pd = this.model;
    // isLoading().loading();
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        var tagButton = document.getElementById("fghty789");
        tagButton.click();
        this.loading = true;
        this._productService.sentEmail(this.addmodel)
          .subscribe(resproducts => this.modelemail = resproducts,
          err => console.log(err),
          () => {
            alert("ระบบทำการส่ง Email เรียบร้อยแล้ว");
            this.ngOnInit();
          }
          );
      }
      );
  }

  del: any;
  delete(ev: any) {
    this.confirmationService.confirm({
      message: 'ถ้าใช่กด YES ถ้าไม่ใช่กด NO',
      header: 'ท่านต้องการนำออกรายชื่อใช่หรือไม่',
      icon: 'fa fa-trash',
      accept: () => {
        this.model.st = 3;
        this.pd = this.model;
        this.updataId = ev.id;
        this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
          .subscribe(resproducts => this.del = resproducts,
          err => console.log(err),
          () => {
            alert("ระบบทำการนำออกรายชื่อ เรียบร้อยแล้ว");
            this.ngOnInit();
          }
          );
      }
    });
  }


}
