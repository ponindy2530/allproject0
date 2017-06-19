import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { M_mended } from '../../shared/service/model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ItComponent implements OnInit {
  model = new M_mended();//เปลี่ยน
  models100: any;
  models101: any;
  models102: any;
  models103: any;
  models10: any;
  models106: any;
  models107: any;
  models109: any;
  models108: any;
  models1099: any;
  updataId: any;
  models1053: any;
  pd: any;
  tbl: any = "m_mended";//เปลี่ยน
  fd: any = "OID";//เปลี่ยน'
  addmodel: any;
  a: any;
  b: any;
  c: any;
  g: any;
  gg: any;
  loading: any;
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) { }

  ngOnInit() {
    if (this._dt.isLog) {
      if (this._dt.profile[0].confirm == '1') {
        if (this._dt.profile[0].status == 1 || this._dt.profile[0].status == 3) {
          this.loading = true;
          //รายการแจ้งซ่อม
          this._productService.dbData(55)
            .subscribe(resproducts => this.models100 = resproducts,
            err => console.log(err)
            // , () => {}
            );

          //รายการกำลังดำเนินการ
          this._productService.dbData(56)
            .subscribe(resproducts => this.models101 = resproducts,
            err => console.log(err)
            // , () => {}
            );

          //รายการดำเนินการเรียบร้อย
          this._productService.dbData(57)
            .subscribe(resproducts => this.models102 = resproducts,
            err => console.log(err)
            // , () => {}
            );

          //สถานะส่งต่อ IT
          this._productService.dbData(58)
            .subscribe(resproducts => this.models103 = resproducts,
            err => console.log(err)
            // , () => {}
            );

          //วันที่ปัจจุบัน
          this._productService.dbData(27)
            .subscribe(resproducts => this.models10 = resproducts[0],
            err => console.log(err)
            // , () => { }
            );

          //จำนวนการซ่อม
          this._productService.dbData(59)
            .subscribe(resproducts => this.models106 = resproducts[0],
            err => console.log(err)
            , () => {
              this.a = this.models106.a;
            }
            );
          //จำนวนกำลังดำเนินการ
          this._productService.dbData(70)
            .subscribe(resproducts => this.models107 = resproducts[0],
            err => console.log(err)
            , () => {
              this.a = this.models107.a;
              this.b = this.models107.b;
              this.c = this.models107.c;
              this.g = this.models107.g;
              this.gg = this.models107.gg;
              this.loading = false;

            }
            );
          //รอรับเครื่องส่งร้าน
          this._productService.dbData(69)
            .subscribe(resproducts => this.models1053 = resproducts,
            err => console.log(err)
            // , () => {}
            );

        } else {
          alert('ท่านไม่ใช่เจ้าหน้าที IT หรือผู้ดูแลระบบจะไม่สามารถเข้าได้');
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



  getck1(ev: any) {
    this.updataId = ev.OID;
    this.model.CID_ADMIN = this._dt.profile[0].cid;
    this.model.STATUS = "2";
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        alert("บันทึกข้อมูลรับซ่อมเรียบร้อยแล้ว")
        this.model = new M_mended();
        this.ngOnInit();
      }
      );
  }
  getck2(ev: any) {
    this.model = ev;
  }



  save() {
    this.model.STATUS = "3";
    this.model.stz = "1";
    this.model.cid_admin2 = this._dt.profile[0].cid;
    this.model.D_SUCCESS = this.models10.nowdate;
    this.updataId = this.model.OID;
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        var tagButton = document.getElementById("fght33y789");
        tagButton.click();
        alert("บันทึกข้อมูลดำเนินการซ่อมเรียบร้อยแล้ว")
        this.model = new M_mended();
        this.ngOnInit();
      }
      );
  }

  getck4(ev: any) {
    this.updataId = ev.OID;
    this.model.cidad1 = this._dt.profile[0].cid;
    this.model.STATUS = "";
    this.model.stkam = "1";
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        alert("บันทึกข้อมูลรับซ่อมเรียบร้อยแล้ว")
        this.model = new M_mended();
        this.ngOnInit();
      }
      );
  }

  delete(ev: any, id: number) {
    if (id != 1) {
      alert('ระบบไม่สามารถทำการยกเลิกการแจ้งส่งพัสดุได้ เนื่องจากพัสดุรับเรื่องส่งซ่อมแล้ว');
    } else {
      this.updataId = ev.OID;
      this.model.CID_ADMIN = this._dt.profile[0].cid;
      this.model.STATUS = "2";
      this.model.stkam = "";
      this.model.stok = "";
      this.pd = this.model;
      this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
        .subscribe(resproducts => this.addmodel = resproducts,
        err => console.log(err),
        () => {
          alert("ยกเลิกการส่งต่อเรียบร้อยแล้ว")
          this.model = new M_mended();
          this.ngOnInit();
        }
        );
    }
  }

}
