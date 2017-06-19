import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router,private _cookieService:CookieService) { }
  models: any = [];
  ngOnInit() {
    this._productService.dbData(2)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );
    
    // this._cookieService.get("xxxx");
    //  this._cookieService.put('xxxx','yyy');
  }

  getlock(ev: any) {
    this.router.navigate(['Registers/'+ev.id]);

  }

}
