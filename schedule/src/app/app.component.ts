import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/service/service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "ห้องประชุมออนไลน์ สำนักงานสาธารณสุขจังหวัดชัยภูมิ V4.0";
  tokenSignature: string;

  constructor(private _productService: ProductService, private _ActivatedRoute: ActivatedRoute, private _CookieService: CookieService) { }



  ngOnInit() {
    const id = this._ActivatedRoute.snapshot.queryParams['id'];
    const followup = this._ActivatedRoute.snapshot.queryParams['followup'];
    const tokenSignature = this._CookieService.get('tokenSignature');
    if (!tokenSignature)
      this.getlogin(id, followup);
    else
      window.location.href;

  }

  getlogin(id, followup) {


    this._productService.loginServe(id)
      .subscribe(res => {
        const jwt = res.jwt_token.split('.');
        localStorage.setItem('tokenHeader', jwt[0]);
        localStorage.setItem('tokenPayload', jwt[1]);
        this._CookieService.put('tokenSignature', jwt[2]);
        window.location.href = this.atou(followup);

      },
      err => console.log(err)
      // , () => {
      //   console.log(this.models);

      // }
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

