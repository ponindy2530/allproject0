import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
import { ProductService } from '../../shared/service/service';
@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {
  tokenSignature: string;
  payload: Object;
  models: any = [];
  ckuser: boolean;
  constructor(private _productService: ProductService, private router: Router, private route: ActivatedRoute, private _cookieService: CookieService) {

  }

  hostlogin = "http://203.157.182.15/accounts";
  followup = this.utoa(this.fullPath());
  cli = this.utoa("cpho#003");
  loc = this.utoa("http://203.157.182.15/accounts/api/loginForm");
  //clog = this.utoa("http://localhost:4200/Login?");
  clog = this.utoa("http://164.115.22.73/p/healthstation?");
  loginpage = this.hostlogin + '/login?followup=' + this.followup + '&cli=' + this.cli + '&loc=' + this.loc + '&clog=' + this.clog;
  logoutpage = this.hostlogin + '/logout?followup=' + this.followup + '&cli=' + this.cli + '&loc=' + this.loc + '&clog=' + this.clog;
  registerpage = this.hostlogin + '/register?followup=' + this.followup + '&cli=' + this.cli + '&loc=' + this.loc + '&clog=' + this.clog;

  ngOnInit() {
    this.tokenSignature = this._cookieService.get('tokenSignature');
    if (this.tokenSignature) {
      this.payload = JSON.parse(this.atou(localStorage.getItem('tokenPayload')));
      const xx = JSON.parse(this.atou(localStorage.getItem('tokenPayload')));
      // console.log(xx.CID);
      this._productService.dbData1(11, xx.CID)
        .subscribe(resproducts => this.models = resproducts[0],
        err => console.log(err)
        , () => {
          if (this.models.a == 1)
            this.ckuser = true;
          else
            this.ckuser = false;
        }
        );
    }

  }

  logout() {
    localStorage.removeItem('tokenHeader');
    localStorage.removeItem('tokenPayload');
    this._cookieService.removeAll();
    window.location.href = this.logoutpage;
  }


  // ucs-2 string to base64 encoded ascii
  utoa(str) {
    return window.btoa(str).replace('=', '');
  }
  // base64 encoded ascii to ucs-2 string
  atou(str) {
    return window.atob(str.replace('=', ''));
  }

  fullPath() {
    return window.location.href;
  }

}
