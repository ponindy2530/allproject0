import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  models: any = [];
  tokenSignature: string;
  payload: Object;
  constructor(private _productService: ProductService, private _cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    this.tokenSignature = this._cookieService.get('tokenSignature');
    if (this.tokenSignature) {
      this.payload = JSON.parse(this.atou(localStorage.getItem('tokenPayload')));
      const xx = JSON.parse(this.atou(localStorage.getItem('tokenPayload')));
      this._productService.dbData1(12, xx.CID)
        .subscribe(resproducts => this.models = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else {
      alert("กรุณา Login ก่อนเข้าสู่ระบบ");
      this.router.navigate(['/']);
    }

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
