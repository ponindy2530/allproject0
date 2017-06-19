import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-room-lock',
  templateUrl: './room-lock.component.html',
  styleUrls: ['./room-lock.component.css']
})
export class RoomLockComponent implements OnInit {
  tokenSignature: string;
  constructor(private _productService: ProductService, private router: Router, private _cookieService: CookieService) { }
  models: any = [];
  ngOnInit() {
    this.tokenSignature = this._cookieService.get('tokenSignature');
    if (this.tokenSignature) {
      this._productService.dbData(4)
        .subscribe(resproducts => this.models = resproducts,
        err => console.log(err)
        // , () => { }
        );
    } else {
      alert("กรุณา Login ก่อนเข้าสู่ระบบ");
      this.router.navigate(['/']);

    }

  }

  getlock() {
    this.router.navigate(['Register']);

  }

}