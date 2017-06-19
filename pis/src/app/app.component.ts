import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './shared/service/service';
import { Dataservice } from './shared/service/dataservice';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = " Smart Personnel ( ข้อมูลบุคลากรสาธารณสุขจังหวัดชัยภูมิ 2560 ) V4.0";


  constructor(private router: Router, private _productService: ProductService, public _dt: Dataservice) { }



  ngOnInit() {


  }
}

