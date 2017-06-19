import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
import { Matiral } from '../../shared/service/model';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
@Component({
  selector: 'app-beik',
  templateUrl: './beik.component.html',
  styleUrls: ['./beik.component.css']
})
export class BeikComponent implements OnInit {
  msgs: Message[] = [];
  msgs2: Message[] = [];
  model = new Matiral();//เปลี่ยน
  models1h: any;
  datapname: any;
  datastatus: any;
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router, private confirmationService: ConfirmationService) {
    this.models1h = [
      { a: 'a' }
    ];

  }
  models: any;
  models1: any;
  models2: any;
  models9: any;
  models5: any;
  ngOnInit() {
    if (this._dt.isLog) {
      if (this._dt.profile[0].confirm == '1') {
        if (this._dt.profile[0].status == 1 || this._dt.profile[0].status == 2) {

          this._productService.dbData(94)
            .subscribe(resproducts => this.models = resproducts,
            err => console.log(err)
            // , () => { }
            );
          this._productService.dbData(95)
            .subscribe(resproducts => this.models2 = resproducts,
            err => console.log(err)
            // , () => { }
            );

          //รายชื่อบุคลากร
          this._productService.dbData(24)
            .subscribe(resproducts => this.models9 = resproducts,
            err => console.log(err)
            // , () => {}
            );
          //กลุ่มงาน/ฝ่ายสสจ    
          this._productService.dbData(20)
            .subscribe(resproducts => this.models5 = resproducts,
            err => console.log(err)
            // , () => {}
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
  tbl: any = "m_matiral";//เปลี่ยน
  fd: any = "OID";//เปลี่ยน'
  addmodel: any;
  geteditdel(del: number, pid: number, fdd: any) {
    this.msgs = [];
    this.model[fdd] = del;
    this.updataId = pid;
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        if (del == 2) {
          alert("ระบบทำการปิดรายชื่อเรียบร้อยแล้ว")
        } else if (del == 1) {
          alert("ระบบทำการเปิดรายชื่อเรียบร้อยแล้ว")
        } else if (del == 3) {
          alert("ระบบทำลดระดับเรียบร้อยแล้ว")
        } else {
          alert("ระบบทำเพิ่มระดับเรียบร้อยแล้ว")
        }
        this.model = new Matiral();
        this.ngOnInit();
      }
      );
  }

  add() {
    this.msgs = [];
    this.model = new Matiral();
    // this.model.status = 4;
    this.updataId = 0;
  }

  save() {
    // this.model.hcode = '00024';
    this.msgs2 = [];
    this.updataId = this.model.OID;
    this.model.ream = '2';
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        this.msgs.push({ severity: 'success', summary: 'ระบบทำการบันทึกข้อมูล', detail: 'เรียบร้อยแล้ว.' });
        this.model = new Matiral();
        this.ngOnInit();
      }
      );
  }
  del: any;
  delete(ev: any) {
    this.confirmationService.confirm({
      message: 'ถ้าใช่กด YES ถ้าไม่ใช่กด NO',
      header: 'ท่านต้องการส่งคืนใช่หรือไม่',
      icon: 'fa fa-trash',
      accept: () => {
        this.msgs = [];
        this.model = ev;
        this.updataId = this.model.OID;
        this.model.ream = '1';
        this.model.CID = '';
        this.model.PARTYCODE = '';
        this.pd = this.model;
        this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
          .subscribe(resproducts => this.del = resproducts,
          err => console.log(err),
          () => {
            this.msgs.push({ severity: 'success', summary: 'ระบบทำการส่งคืนครุภัณฑ์', detail: 'เรียบร้อยแล้ว.' });
            this.model = new Matiral();
            this.ngOnInit();
          }
          );
      }
    });
  }

  // del: any;
  // delete(ev: any) {
  //   this.msgs = [];
  //   this.confirmationService.confirm({
  //     message: 'ถ้าใช่กด YES ถ้าไม่ใช่กด NO',
  //     header: 'ท่านต้องการลบข้อมูลใช่หรือไม่',
  //     icon: 'fa fa-trash',
  //     accept: () => {
  //       this.updataId = ev.GROUPCODE;
  //       this._productService.delData(this.tbl, this.fd, this.updataId)
  //         .subscribe(resproducts => this.del = resproducts,
  //         err => console.log(err),
  //         () => {
  //           this.msgs.push({ severity: 'success', summary: 'ระบบทำการลบข้อมูล', detail: 'เรียบร้อยแล้ว.' });
  //           this.ngOnInit();
  //         }
  //         );
  //     }
  //   });
  // }

  getisnum(ev: any) {
    // console.log(ev.target.value);
    if (isNaN(ev.target.value)) {
      this.msgs2 = [];
      this.msgs2.push({ severity: 'error', summary: 'Error Message', detail: 'กรุณากรอกตัวเลข' });
      this.model.GROUPCODE = ev.target.value.split(ev.target.value, 1)
    } else {
      this.msgs2 = [];
      this._productService.dbData1(81, ev.target.value)
        .subscribe(resproducts => this.models1 = resproducts[0],
        err => console.log(err)
        , () => {
          if (this.models1.a >= 1) {
            this.msgs2 = [];
            this.msgs2.push({ severity: 'error', summary: 'Error Message', detail: 'รหัสประเภทครุภัณฑ์นี้มีการใช้งานแล้ว กรุณาเปลี่ยนใหม่' });
            this.model.GROUPCODE = ev.target.value.split(ev.target.value, 1)
          } else {
            this.msgs2 = [];
            // this.msgs2.push({ severity: 'success', summary: 'Success Message', detail: 'รหัสประเภทครุภัณฑ์นี้ยังไม่มีการใช้งาน' });
          }
        }
        );
    }
  }

  numtest3: any;
  selectfilter3(ev: any) {
    let num2 = ev.target.value
    // let dd = _.filter(this.models2, { 'GROUPCODE': num });
    // console.log(dd);
    this.numtest3 = num2;
    // console.log(this.numtest3);

  }

}