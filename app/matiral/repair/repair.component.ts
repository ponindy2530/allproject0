import { Component, OnInit } from '@angular/core';
import { M_mended } from '../../shared/service/model';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {
  model = new M_mended();//เปลี่ยน
  models10: any;
  models9: any;
  models5: any;
  models2: any;
  models3: any;
  updataId: any;
  pd: any;
  tbl: any = "m_mended";//เปลี่ยน
  fd: any = "OID";//เปลี่ยน'
  addmodel: any;
  cid: any = "1361300048749";
  ssjcode: any = "C20";
  constructor(private _productService: ProductService, public _dt: Dataservice, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.updataId = 0;
    //วันที่ปัจจุบัน   
    this._productService.dbData(27)
      .subscribe(resproducts => this.models10 = resproducts[0],
      err => console.log(err)
      , () => {
        this.model.DATE_SERV = this.models10.nowdate;
      }
      );
    //รายชื่อบุคลากร
    this._productService.dbData(24)
      .subscribe(resproducts => this.models9 = resproducts,
      err => console.log(err)
      , () => {
        this.model.CID = this.cid;
      }
      );
    //กลุ่มงาน/ฝ่ายสสจ   
    this._productService.dbData(20)
      .subscribe(resproducts => this.models5 = resproducts,
      err => console.log(err)
      , () => {
        this.model.PARTYCODE = this.ssjcode;
      }
      );

    //ครุภัณบุคคล   
    this._productService.dbData1(51, this.cid)
      .subscribe(resproducts => this.models2 = resproducts,
      err => console.log(err)
      // , () => {}
      );
    //ครุภัณบุคคล   
    this._productService.dbData1(52, this.cid)
      .subscribe(resproducts => this.models3 = resproducts,
      err => console.log(err)
      // , () => {}
      );

  }

  models20: any;
  save() {
    console.log(this.model.MID);
    this._productService.dbData1(53, this.model.MID)
      .subscribe(resproducts => this.models20 = resproducts[0],
      err => console.log(err)
      , () => {
        if (this.models20.a > 0) {
          alert("ครุภัณฑ์อยู่ระหว่างดำเนินการ ไม่สามารถเพิ่มข้อมูลไหม่ได้ กรุณาตรวจสอบที่สถานะที่รายการแจ้งซ่อม");
        } else {
          this.model.STATUS = '1';
          this.model.EXPENS = '0';
          this.pd = this.model;
          this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
            .subscribe(resproducts => this.addmodel = resproducts,
            err => console.log(err),
            () => {
              alert("บันทึกข้อมูลเรียบร้อยแล้ว")
              this.model = new M_mended();
              this.ngOnInit();
            }
            );
        }
      }
      );


  }

  del: any;
  models37: any;
  delete(ev: any, i: number) {
    //ครุภัณบุคคล   
    this._productService.dbData1(54, ev.OID)
      .subscribe(resproducts => this.models37 = resproducts[0],
      err => console.log(err)
      , () => {
        if (this.models37.a > 0) {
          if (confirm('ท่านต้องการจะยกเลิกการแจ้งซ่อมใช่หรือไม่')) {
            this._productService.delData(this.tbl, this.fd, ev.OID)
              .subscribe(resproducts => this.del = resproducts,
              err => console.log(err),
              () => {
                this.models3.splice(i, 1);
                alert('ระบบทำการลบข้อมูลเรียบร้อยแล้ว');
                // this.msgs.push({ severity: 'success', summary: 'ระบบทำการลบข้อมูล', detail: 'เรียบร้อยแล้ว' });
              }
              );
          }
        } else {
          alert('ระบบไม่สามารถทำการยกเลิกการแจ้งซ่อมได้ เนื่องจากอยู่ในช่วงดำเนินการซ่อม');
        }
      }
      );






  }

}
