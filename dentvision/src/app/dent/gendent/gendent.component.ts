import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';

@Component({
  selector: 'app-gendent',
  templateUrl: './gendent.component.html',
  styleUrls: ['./gendent.component.css']
})
export class GendentComponent implements OnInit {

  constructor(private _productService: ProductService) { }
  models: any;
  models1: any;
  ngOnInit() {

    //ข้อมูลทั่วไป 
    this._productService.dbData(55)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );

    //ข้อมูลทั่วไป หัว
    this._productService.dbData(56)
      .subscribe(resproducts => this.models1 = resproducts,
      err => console.log(err)
      // , () => { }
      );
  }
  coli: any;
  clickcoltr(i) {
    this.coli = i;
    console.log(this.coli);

  }

}
