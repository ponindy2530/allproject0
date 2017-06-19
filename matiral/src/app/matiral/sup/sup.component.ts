import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { M_mended } from '../../shared/service/model';
import { Message } from 'primeng/primeng';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sup',
  templateUrl: './sup.component.html',
  styleUrls: ['./sup.component.css']
})
export class SupComponent implements OnInit {
  model = new M_mended();//เปลี่ยน
  updataId: any;
  pd: any;
  tbl: any = "m_mended";//เปลี่ยน
  fd: any = "OID";//เปลี่ยน'
  addmodel: any;
  models103: any;
  models104: any;
  models105: any;
  models1051: any;
  models1052: any;
  models1053: any;
  models10: any;
  models107: any;
  msgs: Message[] = [];
  ddd: any;
  cc: any;
  d: any;
  e: any;
  f: any;
  ff: any;
  gg: any;
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) {
    this.ddd = [
      {
        id: 1,
        dname: "ซ่อมได้"
      },
      {
        id: 2,
        dname: "ซ่อมไม่ได้"
      },
    ];

  }
  loading: any;
  ngOnInit() {
    if (this._dt.isLog) {
      if (this._dt.profile[0].confirm == '1') {
        if (this._dt.profile[0].status == 1 || this._dt.profile[0].status == 2) {
          this.loading = true;
          //สถานะส่งต่อ IT
          this._productService.dbData(68)
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

          //รอรับเครื่อง
          this._productService.dbData(64)
            .subscribe(resproducts => this.models104 = resproducts,
            err => console.log(err)
            // , () => {}
            );

          //รอรับเครื่องส่งร้าน
          this._productService.dbData(65)
            .subscribe(resproducts => this.models105 = resproducts,
            err => console.log(err)
            // , () => {}
            );

          //รอรับเครื่องส่งร้าน
          this._productService.dbData(66)
            .subscribe(resproducts => this.models1051 = resproducts,
            err => console.log(err)
            // , () => {}
            );

          //รอรับเครื่องส่งร้าน
          this._productService.dbData(67)
            .subscribe(resproducts => this.models1052 = resproducts,
            err => console.log(err)
            // , () => {}
            );

          //รอรับเครื่องส่งร้าน
          this._productService.dbData(69)
            .subscribe(resproducts => this.models1053 = resproducts,
            err => console.log(err)
            // , () => {}
            );

          //จำนวนกำลังดำเนินการ
          this._productService.dbData(70)
            .subscribe(resproducts => this.models107 = resproducts[0],
            err => console.log(err)
            , () => {
              this.cc = this.models107.cc;
              this.d = this.models107.d;
              this.e = this.models107.e;
              this.f = this.models107.f;
              this.ff = this.models107.ff;
              this.gg = this.models107.gg;
              this.loading = false;
            }
            );
        } else {
          alert('ท่านไม่ใช่เจ้าหน้าทีพัสดุ หรือผู้ดูแลระบบจะไม่สามารถเข้าได้');
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
    this.model.cidad2 = "1361300048749";
    this.model.stkam = "2";
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


  oidimg2: any;
  upurl: any;
  tyimg: any;
  hnameimg: any;
  idsave: number;
  getck21(ev: any, id: number) {
    this.model = ev;
    let img1 = this.model.OID;
    // console.log(img1);
    // this.selectedValue = img1;
    if (id == 1) {
      this.upurl = "http://203.157.182.17/yiiapi/index.php?r=file/fileupload2";
      this.tyimg = ".pdf";
      // this.hnameimg = "อัพโหลดไฟล์ .PDF";
      this.idsave = id;
      this.uploadedFiles = [];
    } else {
      this.upurl = "http://203.157.182.17/yiiapi/index.php?r=file/fileupload1";
      this.tyimg = ".pdf";
      // this.hnameimg = "อัพโหลดไฟล์ .PDF";
      this.idsave = id;
      this.uploadedFiles = [];
    }
    this.oidimg2 = img1;
  }


  save() {
    this.model.stkam = "3";
    this.model.cidad3 = "1361300048749";
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

  save2() {
    this.model.stkam = "4";
    this.model.cidad4 = "1361300048749";
    this.updataId = this.model.OID;
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        var tagButton = document.getElementById("dfer342");
        tagButton.click();
        alert("บันทึกข้อมูลดำเนินการซ่อมเรียบร้อยแล้ว")
        this.model = new M_mended();
        this.ngOnInit();
      }
      );
  }

  uploadedFiles: any[] = [];
  modeladd: any;
  onUpload(event, oidimg) {

    for (let file of event.files) {

      this.uploadedFiles.push(file);
      // console.log(oidimg);
      // console.log(file.name);
      this.updataId = oidimg;
      if (this.idsave == 1) {
        this.model.INVOICE = file.name;
      } else {
        this.model.SHEET = file.name;
      }
      this.pd = this.model;
      this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
        .subscribe(resproducts => this.modeladd = resproducts,
        err => console.log(err),
        () => {
          // this.uploadedFiles = [];
          // var tagButton = document.getElementById("fghty789");
          // tagButton.click();
          // alert("บันทึกข้อมูลเรียบร้อยแล้ว")
          // this.model = new M_mended();
          // this.ngOnInit();

        }
        );
    }
  }

  getck4(ev: any) {
    this.updataId = ev.OID;
    this.model.cidad5 = "1361300048749";
    this.model.STATUS = "3";
    this.model.stz = "2";
    this.model.D_SUCCESS = this.models10.nowdate;
    this.model.stkam = "";
    this.model.stok = "";
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

}
