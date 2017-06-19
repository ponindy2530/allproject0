import { Component, OnInit } from '@angular/core';
import { Hst_register } from '../../../shared/service/model';
import { ProductService } from '../../../shared/service/service';
import { CookieService } from 'angular2-cookie/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = new Hst_register();
  msgs: Message[] = [];
  tokenSignature: string;
  payload: string
  constructor(private _productService: ProductService, private router: Router, private route: ActivatedRoute, private _CookieService: CookieService) { }

  models: any = [];
  models1: any = [];
  private sub: any;
  ngOnInit() {
    this.tokenSignature = this._CookieService.get('tokenSignature');

    if (this.tokenSignature) {
      this.sub = this.route.params
        .subscribe(params => {
          let id = params['id'];
          if (id != undefined) {
            this.model.id_room = id;
          }
        });
      const xx = JSON.parse(this.atou(localStorage.getItem('tokenPayload')));
      console.log(xx);

      this.updataId = 0;
      this.model.fname = xx.FIRSTNAME;
      this.model.lname = xx.LASTNAME;
      this.model.hcode = xx.HOSPCODE;
      this.model.email = xx.EMAIL;
      this.model.tol = xx.TELEPHONE_NUMBER;
      this._productService.dbData(5)
        .subscribe(resproducts => this.models = resproducts,
        err => console.log(err)
        // , () => { }
        );

      this._productService.dbData(6)
        .subscribe(resproducts => this.models1 = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else {
      alert("กรุณา Login ก่อนเข้าสู่ระบบ");
      this.router.navigate(['/']);
    }

  }

  updataId: any;
  pd: any;
  tbl: any = "hst_register";//เปลี่ยน
  fd: any = "id";//เปลี่ยน'
  addmodel: any = [];

  save() {
    const xx = JSON.parse(this.atou(localStorage.getItem('tokenPayload')));
    this.model.pname = xx.PRENAME;
    this.model.cid = xx.CID;
    // console.log(this.model);
    this.pd = this.model;
    this._productService.addData(this.tbl, this.fd, this.updataId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        alert("ระบบทำการบันทึกข้อมูล เรียบร้อยแล้ว");
        this.router.navigate(['UserShow']);
      }
      );
  }

  // ucs-2 string to base64 encoded ascii
  utoa(str) {
    return window.btoa(str).replace('=', '');
  }
  // base64 encoded ascii to ucs-2 string
  atou(str) {
    return window.atob(str.replace('=', ''));
  }
}
