import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/service/service';
import { Dataservice } from '../../../shared/service/dataservice';
@Component({
  selector: 'app-list-register-ok',
  templateUrl: './list-register-ok.component.html',
  styleUrls: ['./list-register-ok.component.css']
})
export class ListRegisterOkComponent implements OnInit {

  constructor(private _productService: ProductService, public _dt: Dataservice) { }

  models: any = [];
  ngOnInit() {
    this._productService.dbData(9)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => {
      //   this.loading = false;

      // }
      );
  }

}
