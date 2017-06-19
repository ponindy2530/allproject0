import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
@Component({
  selector: 'app-gentanta',
  templateUrl: './gentanta.component.html',
  styleUrls: ['./gentanta.component.css']
})
export class GentantaComponent implements OnInit {

  constructor(private _productService: ProductService) { }
  models: any;
  models1: any;
  ngOnInit() {

    //ข้อมูลทันตา
    this._productService.dbData(58)
      .subscribe(resproducts => this.models = resproducts,
      err => console.log(err)
      // , () => { }
      );

    //ข้อมูลทั่วไป หัว
    this._productService.dbData(59)
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
