import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
import { C_pis } from '../../shared/service/model';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
@Component({
  selector: 'app-pis',
  templateUrl: './pis.component.html',
  styleUrls: ['./pis.component.css']
})
export class PisComponent implements OnInit {
  msgs: Message[] = [];
  msgs2: Message[] = [];
  model = new C_pis();//เปลี่ยน
  models1h: any;
  datapname: any;
  datastatus: any;
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router, private confirmationService: ConfirmationService) {
    this.models1h = [
      { a: 'a' }
    ];

    this.datapname = [{ pname: 'นาย' }, { pname: 'นาง' }, { pname: 'น.ส' }];
    this.datastatus = [{ id: 1, nst: 'ผู้ดูแลระบบ' }, { id: 2, nst: 'พัสดุ' }, { id: 3, nst: 'IT' }, { id: 4, nst: 'ทั่วไป' }];
  }
  models: any;
  models1: any;
  models2: any;
  ngOnInit() {

    if (this._dt.isLog) {
      if (this._dt.profile[0].confirm == '1') {
        if (this._dt.profile[0].status == 1 || this._dt.profile[0].status == 2) {
          this._productService.dbData(75)
            .subscribe(resproducts => this.models = resproducts,
            err => console.log(err)
            // , () => { }
            );
          this._productService.dbData(76)
            .subscribe(resproducts => this.models1 = resproducts,
            err => console.log(err)
            // , () => { }
            );


        } else {
          alert('ท่านไม่ใช่เจ้าหน้าที่พัสดุหรือผู้ดูแลระบบจะไม่สามารถเข้าได้');
          this.router.navigate(['Repair']);
        }
      } else {
        alert('กรุณา ยืนยันข้อมูลก่อนเข้าสู่ระบบ');
        this.router.navigate(['Ckrgt']);
      }
    } else {
      alert('กรุณา Login เพื่อเข้าสู่ระบบ');
      this.router.navigate(['Login']);
    }
  }
  updataId: any;
  pd: any;
  tbl: any = "c_pis";//เปลี่ยน
  fd: any = "id";//เปลี่ยน'
  addmodel: any;
  geteditdel(del: number, pid: number) {
    this.msgs = [];
    this.model.del = del;
    this.updataId = pid;
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        if (del == 2) {
          alert("ระบบทำงานปิดรายชื่อเรียบร้อยแล้ว")
        } else {
          alert("ระบบทำงานเปิดรายชื่อเรียบร้อยแล้ว")
        }
        this.model = new C_pis();
        this.ngOnInit();
      }
      );
  }

  add() {
    this.msgs = [];
    this.model = new C_pis();
    this.model.status = 4;
    this.updataId = 0;
  }

  save() {
    this.model.hcode = '00024';
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        this.msgs.push({ severity: 'success', summary: 'ระบบทำการบันทึกข้อมูล', detail: 'เรียบร้อยแล้ว.' });
        this.model = new C_pis();
        this.ngOnInit();
      }
      );
  }

  edit(ev: any) {
    this.msgs = [];
    this.model = ev;
    this.updataId = this.model.id;

  }

  del: any;
  delete(ev: any, i: number) {
    this.msgs = [];
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
            this.models.splice(i, 1);
            this.msgs.push({ severity: 'success', summary: 'ระบบทำการลบข้อมูล', detail: 'เรียบร้อยแล้ว.' });
          }
          );
      }
    });
  }

  getisnum(ev: any) {
    // console.log(ev.target.value);

    if (isNaN(ev.target.value)) {
      this.msgs2 = [];
      this.msgs2.push({ severity: 'error', summary: 'Error Message', detail: 'กรุณากรอกตัวเลข' });
      this.model.cid = ev.target.value.replace(/\D/g, '');
    } else {
      this.msgs2 = [];
      this._productService.dbData1(87, ev.target.value)
        .subscribe(resproducts => this.models2 = resproducts[0],
        err => console.log(err)
        , () => {
          if (this.models2.a >= 1) {
            this.msgs2 = [];
            this.msgs2.push({ severity: 'error', summary: 'Error Message', detail: 'เลขบัตรประชาชนนี้มีการใช้งานแล้ว กรุณาเปลี่ยนใหม่' });
            this.model.cid = ev.target.value.split(ev.target.value, 1)
          } else {
            this.msgs2 = [];
            // this.msgs2.push({ severity: 'success', summary: 'Success Message', detail: 'รหัสประเภทครุภัณฑ์นี้ยังไม่มีการใช้งาน' });
          }
        }
        );
    }
  }

}
