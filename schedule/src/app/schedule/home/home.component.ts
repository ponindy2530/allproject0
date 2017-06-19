import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _productService: ProductService, private router: Router, public _dt: Dataservice) { }


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

  models: any;
  yurl: any;
  fullname: any;
  ngOnInit() {
    this.sub = this.route.params
      .subscribe(params => {
        let id = this.atou(params['id']);
        if (this._dt.isLog) {
          this._productService.dbData1(106, id)
            .subscribe(resproducts => this.models = resproducts[0],
            err => console.log(err)
            , () => {
              // console.log(this.models.URL);
              this.yurl = this.models.URL;
              this.fullname = this._dt.profile[0].fname + ' ' + this._dt.profile[0].lname;
            }
            );
        } else {
          alert('กรุณา Login เพื่อเข้าสู่ระบบ');
          this.router.navigate(['Login']);
        }


      });
  }

}
