import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.css']
})
export class ManuComponent implements OnInit {

  constructor(private _productService: ProductService) { }
  models: any = [];
  ngOnInit() {
    this._productService.dbData1(1,2)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => {
      //   console.log(this.models);

      // }
      );
  }

}
