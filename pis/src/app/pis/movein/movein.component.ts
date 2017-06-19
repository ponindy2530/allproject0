import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
import { Sa_movein_pis } from '../../shared/service/model';
import { Message } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
// const swal = require('sweetalert2');
// // declare let swal: any;
@Component({
  selector: 'app-movein',
  templateUrl: './movein.component.html',
  styleUrls: ['./movein.component.css']
})
export class MoveinComponent implements OnInit {
  msgs: Message[] = [];
  model = new Sa_movein_pis();
  datayears: any;
  datahit: any;
  yyyy: any;
  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router, private confirmationService: ConfirmationService) {
    this.datayears = [{ years: 2560 }, { years: 2561 }, { years: 2562 }, { years: 2563 }, { years: 2564 }, { years: 2565 }];
    this.datahit = [{ hit: 1 }, { hit: 2 }, { hit: 3 }, { hit: 4 }, { hit: 5 }];
    let today = new Date();
    this.yyyy = today.getFullYear() + 543;
  }
  models1: any;
  models3: any;
  models4: any;
  models5: any;
  updataId: any;
  pd: any;
  tbl: any = "sa_movein_pis";//เปลี่ยน
  fd: any = "id";//เปลี่ยน'
  ngOnInit() {
    if (this._dt.isLog) {
      if (this._dt.profile[0].usertype == '1') {
        this.model.years = this.yyyy;
        this.model.hit = '1';
        this.updataId = 0;
        this._productService.dbData(142)
          .subscribe(resproducts => this.models1 = resproducts,
          err => console.log(err)
          // , () => { }
          );

        this._productService.dbData(144)
          .subscribe(resproducts => this.models3 = resproducts,
          err => console.log(err)
          // , () => { }
          );

        this._productService.dbData(145)
          .subscribe(resproducts => this.models4 = resproducts,
          err => console.log(err)
          // , () => {}
          );

        this._productService.dbData(146)
          .subscribe(resproducts => this.models5 = resproducts,
          err => console.log(err)
          // , () => {}
          );
      } else {
        this.router.navigate(['Amphome']);
      }
    } else {
      this.router.navigate(['Login']);
    }





  }

  //ค้นหา  
  getsc(ev: any) {
    this.msgs = [];
    this._productService.dbData1(143, ev.target.value)
      .subscribe(resproducts => this.models1 = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }
  editshow(ev: any) {
    this.msgs = [];
    this.model = ev;
    this.model.years = this.yyyy;
    this.model.hit = '1';
  }
  addmodel: any;
  save() {
    this.msgs = [];
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        this.msgs.push({ severity: 'success', summary: 'ระบบทำการบันทึกข้อมูล', detail: 'เรียบร้อยแล้ว.' });
        this.model = new Sa_movein_pis();
        this.ngOnInit();
      }
      );
  }

  oidimg2: any;
  upurl: any;
  tyimg: any;
  hnameimg: any;
  idsave: number;
  editimg(ev: any) {
    this.model = ev;
    let img1 = this.model.id;
    this.upurl = "http://164.115.22.73/p/ponapiyii/index.php?r=file/fileupload3";
    this.tyimg = ".pdf";
    this.hnameimg = "อัพโหลดไฟล์ .PDF";
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
      this.model.filepdf = file.name;
      this.pd = this.model;
      this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
        .subscribe(resproducts => this.modeladd = resproducts,
        err => console.log(err),
        () => {
          this.uploadedFiles = [];
          var tagButton = document.getElementById("fghty789");
          tagButton.click();
          alert("บันทึกข้อมูลเรียบร้อยแล้ว")
          this.model = new Sa_movein_pis();
          this.ngOnInit();

        }
        );
    }
  }

  edit(ev: any) {
    this.msgs = [];
    this.model = ev;
    this.updataId = this.model.id;

  }

  del: any;
  delete(ev: any) {
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
            this.msgs.push({ severity: 'success', summary: 'ระบบทำการลบข้อมูล', detail: 'เรียบร้อยแล้ว.' });
            this.ngOnInit();
          }
          );
      }
    });
  }

}
