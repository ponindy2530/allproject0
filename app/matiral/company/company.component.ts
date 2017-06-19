import { Component, OnInit } from '@angular/core';
import { C_company } from '../../shared/service/model';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { C_typecom } from '../../shared/service/model';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  model = new C_company();//เปลี่ยน
  model1 = new C_typecom();//เปลี่ยน
  models100: any;
  models101: any;
  addmodel: any;
  updataId: any;
  updataId1: any;
  pd: any;
  tbl: any = "c_company";//เปลี่ยน
  fd: any = "id";//เปลี่ยน'
  pd1: any;
  tbl1: any = "c_typecom";//เปลี่ยน
  fd1: any = "id";//เปลี่ยน'
  addmodel1: any;
  constructor(private _productService: ProductService, public _dt: Dataservice, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.updataId = 0;
    this.updataId1 = 0;
    //ชื่อบริษัท
    this._productService.dbData(48)
      .subscribe(resproducts => this.models100 = resproducts,
      err => console.log(err)
      // , () => {}
      );

    //ชื่อบริษัท
    this._productService.dbData(49)
      .subscribe(resproducts => this.models101 = resproducts,
      err => console.log(err)
      // , () => {}
      );
  }

  save() {
    // console.log(this.model);
    this.model.cid_save = "1361300048749";
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        alert("บันทึกข้อมูลเรียบร้อยแล้ว")
        this.model = new C_company();
        this.ngOnInit();
      }
      );

  }

  del: any;
  delete(ev: any, i: number) {
    if (confirm('ท่านต้องการจะลบข้อมูลใช่หรือไม่')) {
      this._productService.delData(this.tbl, this.fd, ev.id)
        .subscribe(resproducts => this.del = resproducts,
        err => console.log(err),
        () => {
          this.models100.splice(i, 1);
          alert('ระบบทำการลบข้อมูลเรียบร้อยแล้ว');
          // this.msgs.push({ severity: 'success', summary: 'ระบบทำการลบข้อมูล', detail: 'เรียบร้อยแล้ว' });
        }
        );
    }
  }

  getedit(ev: any) {
    this.model = ev;
    this.updataId = this.model.id;
    // console.log(this.updataId);

  }

  save1() {
    this.pd1 = this.model1;
    this._productService.addData(this.tbl1, this.fd1, this.updataId1, this.pd1)
      .subscribe(resproducts => this.addmodel1 = resproducts,
      err => console.log(err),
      () => {
        alert("บันทึกข้อมูลเรียบร้อยแล้ว")
        this.model1 = new C_typecom();
        this.ngOnInit();
      }
      );

  }

  del1: any;
  delete1(ev: any, i: number) {
    if (confirm('ท่านต้องการจะลบข้อมูลใช่หรือไม่')) {
      this._productService.delData(this.tbl1, this.fd1, ev.id)
        .subscribe(resproducts => this.del = resproducts,
        err => console.log(err),
        () => {
          this.models101.splice(i, 1);
          alert('ระบบทำการลบข้อมูลเรียบร้อยแล้ว');
          // this.msgs.push({ severity: 'success', summary: 'ระบบทำการลบข้อมูล', detail: 'เรียบร้อยแล้ว' });
        }
        );
    }
  }
  getedit1(ev: any) {
    this.model1 = ev;
    this.updataId1 = this.model1.id;
    // console.log(this.updataId);

  }
}  
