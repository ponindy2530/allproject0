import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { Dataservice } from '../../shared/service/dataservice';
@Component({
  selector: 'app-rpmovein',
  templateUrl: './rpmovein.component.html',
  styleUrls: ['./rpmovein.component.css']
})
export class RpmoveinComponent implements OnInit {

  constructor(private _productService: ProductService, public _dt: Dataservice) { }
  models5: any;
  ngOnInit() {
    this._productService.dbData(146)
      .subscribe(resproducts => this.models5 = resproducts,
      err => console.log(err)
      // , () => {}
      );
  }

}
