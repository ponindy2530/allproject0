import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/service/service';
import { Matiral } from '../../shared/service/model';
import { Dataservice } from '../../shared/service/dataservice';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  msgs: Message[] = [];
  updataId: any;
  model = new Matiral();//เปลี่ยน

  models1: any;
  models2: any;
  models3: any;
  models4: any;
  models15: any;
  models6: any;
  models7: any;
  models8: any;
  models9: any;
  models5: any;
  models13: any;
  models12: any;
  models10: any;
  models100: any;
  models11: any;
  pd: any;
  tbl: any = "m_matiral";//เปลี่ยน
  fd: any = "OID";//เปลี่ยน'
  addmodel: any;
  datenow2 = Date.now();
  constructor(private route: ActivatedRoute, private router: Router, private _productService: ProductService, public _dt: Dataservice, private confirmationService: ConfirmationService) { }


  private sub: any;
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  atou(str) {
    return window.atob(str.replace('=', ''));
  }

  utoa(str) {
    return window.btoa(str).replace('=', '');
  }

  ngOnInit() {


    this.model.DISTRIBUTE = '9';
    //หมวดทั้งหมด
    this._productService.dbData(15)
      .subscribe(resproducts => this.models1 = resproducts,
      err => console.log(err)
      // , () => {}
      );

    //ชนิดทั้งหมด
    this._productService.dbData(16)
      .subscribe(resproducts => this.models2 = resproducts,
      err => console.log(err)
      // , () => {}
      );

    //ครุภัณฑ์ทั้งหมด
    this._productService.dbData(17)
      .subscribe(resproducts => this.models3 = resproducts,
      err => console.log(err)
      // , () => {}
      );

    //หน่วยนับ
    this._productService.dbData(28)
      .subscribe(resproducts => this.models15 = resproducts,
      err => console.log(err)
      // , () => { }
      );


    //ประเภทเงินที่ซื้อ
    this._productService.dbData(21)
      .subscribe(resproducts => this.models6 = resproducts,
      err => console.log(err)
      // , () => { }
      );

    //วิธีที่การจัดหา
    this._productService.dbData(22)
      .subscribe(resproducts => this.models7 = resproducts,
      err => console.log(err)
      // , () => { }
      );

    //สถานะการจำหน่าย
    this._productService.dbData(23)
      .subscribe(resproducts => this.models8 = resproducts,
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

    //บันทึกล่าสุด
    this._productService.dbData(45)
      .subscribe(resproducts => this.models13 = resproducts,
      err => console.log(err)
      // , () => {}
      );
    //วันที่ปัจจุบัน
    this._productService.dbData(27)
      .subscribe(resproducts => this.models10 = resproducts[0],
      err => console.log(err)
      , () => {
        this.model.DATE_SERV = this.models10.nowdate;
      }
      );

    //ชื่อบริษัท
    this._productService.dbData(48)
      .subscribe(resproducts => this.models100 = resproducts,
      err => console.log(err)
      // , () => {}
      );

    this.sub = this.route.params
      .subscribe(params => {
        let id = this.atou(params['id']);
        // console.log(id);
        if (id > '0') {
          this.updataId = id;
          this._productService.dbData1(44, this.updataId)
            .subscribe(resproducts => this.models11 = resproducts[0],
            err => console.log(err)
            , () => {

              this.model = this.models11
            }
            );
        } else {
          this.updataId = id;
          // console.log("NO");
        }
      });
  }

  getsearch(ev: any, num: any) {
    let key = ev.target.value
    // console.log(key);
    if (num == 1) {
      this._productService.dbData1(42, key)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        // , () => console.log(this.models3);

        );
    } else {
      this._productService.dbData1(42, key)
        .subscribe(resproducts => this.models3 = resproducts,
        err => console.log(err)
        , () => {
          this._productService.dbData1(43, key)
            .subscribe(resproducts => this.models2 = resproducts,
            err => console.log(err)
            // , () => console.log(this.models3);

            );
        }

        );
    }

  }

  getmax(ev: any) {
    let key = ev.target.value

    this._productService.dbData1(19, key)
      .subscribe(resproducts => this.models4 = resproducts[0],
      err => console.log(err)
      , () => {
        this.model.MATIRALCODE = this.models4.a;
      }

      );
  }

  models44: any;
  getckmax(ev: any, mcode: any) {
    let key = ev.target.value
    this._productService.dbData2(47, mcode, key)
      .subscribe(resproducts => this.models44 = resproducts[0],
      err => console.log(err)
      , () => {
        console.log(this.models44.a);
        if (this.models44.a >= 1) {
          alert("รหัสครุภัณฑ์ " + mcode + "/" + key + " มีในระบบแล้ว !!");
          this.model.MATIRALCODE = '';
        }
      }

      );
  }

  numtest3: any;
  selectfilter3(ev: any) {
    let num2 = ev.target.value
    // let dd = _.filter(this.models2, { 'GROUPCODE': num });
    // console.log(dd);
    this.numtest3 = num2;
  }

  getreset() {
    this.router.navigate(['Matiral']);
  }

  save() {
    this.model.IMGS = 'noimg.jpg';
    // this.model.CID_SAVECODE = this._dt.profile[0].CID;
    this.model.CID_SAVECODE = "1361300048749";
    this.model.MATIRALCODE_FULL = this.model.MATIRATYPECODE + '/' + this.model.MATIRALCODE;

    this._productService.dbData1(29, this.model.MATIRATYPECODE)
      .subscribe(resproducts => this.models12 = resproducts[0],
      err => console.log(err)
      , () => {
        this.model.MATIRALNAME = this.models12.ATTRIBUTE;
        this.pd = this.model;
        this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
          .subscribe(resproducts => this.addmodel = resproducts,
          err => console.log(err),
          () => {
            alert("บันทึกข้อมูลเรียบร้อยแล้ว")
            this.model = new Matiral();
            this._productService.dbData(27)
              .subscribe(resproducts => this.models10 = resproducts[0],
              err => console.log(err)
              , () => {
                this.model.DATE_SERV = this.models10.nowdate;
                this.model.DISTRIBUTE = '9';
                let id = this.utoa(0);
                this.router.navigate(['Addnew/' + id]);
                //บันทึกล่าสุด
                this._productService.dbData(45)
                  .subscribe(resproducts => this.models13 = resproducts,
                  err => console.log(err)
                  // , () => {}
                  );

              }
              );

            // this.msgs.push({ severity: 'success', summary: 'ระบบทำการบันทึกข้อมูล', detail: 'เรียบร้อยแล้ว' });
          }
          );

      });

  }

  getedit(ev: any) {
    this.model = ev;
    let id = this.utoa(this.model.OID);
    this.router.navigate(['Addnew/' + id]);
  }
  del: any;
  delete(ev: any, i: number) {
    if (confirm('ท่านต้องการจะลบข้อมูลใช่หรือไม่')) {
      this._productService.delData(this.tbl, this.fd, ev.OID)
        .subscribe(resproducts => this.del = resproducts,
        err => console.log(err),
        () => {
          this.models13.splice(i, 1);
          alert('ระบบทำการลบข้อมูลเรียบร้อยแล้ว');
          // this.msgs.push({ severity: 'success', summary: 'ระบบทำการลบข้อมูล', detail: 'เรียบร้อยแล้ว' });
        }
        );
    }
  }


  // selectedValue: any;
  oidimg2: any;
  upurl: any;
  tyimg: any;
  hnameimg: any;
  idsave: number;
  editimg(ev: any, id: number) {
    this.model = ev;
    let img1 = this.model.OID;
    // console.log(img1);
    // this.selectedValue = img1;
    if (id == 1) {
      this.upurl = "http://203.157.182.17/yiiapi/index.php?r=file/fileupload";
      this.tyimg = "image/*";
      this.hnameimg = "เปลี่ยนรูปภาพ";
      this.idsave = id;
    } else {
      this.upurl = "http://203.157.182.17/yiiapi/index.php?r=file/fileupload3";
      this.tyimg = ".pdf";
      this.hnameimg = "อัพโหลดไฟล์ .PDF";
      this.idsave = id;
    }
    this.oidimg2 = img1;
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
        this.model.IMGS = file.name;
      } else {
        this.model.DOC = file.name;
      }
      this.pd = this.model;
      this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
        .subscribe(resproducts => this.modeladd = resproducts,
        err => console.log(err),
        () => {
          this.uploadedFiles = [];
          var tagButton = document.getElementById("fghty789");
          tagButton.click();
          this.model.DATE_SERV = this.models10.nowdate;
          this.model.DISTRIBUTE = '9';
          let id = this.utoa(0);
          this.msgs.push({ severity: 'success', summary: 'ระบบทำการเปลียนรูปภาพ', detail: 'เรียบร้อยแล้ว' });
          this.router.navigate(['Addnew/' + id]);

        }
        );
    }
  }



}
