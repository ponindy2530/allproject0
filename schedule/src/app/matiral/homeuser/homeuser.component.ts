import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  constructor(private _productService: ProductService, public _dt: Dataservice, private router: Router) { }
  fullname: any;
  st: any;
  ngOnInit() {
    if (this._dt.isLog) {
      this.fullname = this._dt.profile[0].fname + ' ' + this._dt.profile[0].lname;
      this.st = this._dt.profile[0].nst;
    } else {
      this.router.navigate(['Login']);
    }
  }

  getcli() {
    this.router.navigate(['Schedule']);
  }

}
