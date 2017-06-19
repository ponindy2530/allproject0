import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/service/service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rpdent',
  templateUrl: './rpdent.component.html',
  styleUrls: ['./rpdent.component.css']
})
export class RpdentComponent implements OnInit {

  models: any;

  tdate = "10 กุมภาพันธ์ พ.ศ. 2560";

  constructor(private route: ActivatedRoute, private _productService: ProductService) { }

  private sub: any;
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  ngOnInit() {
    this.sub = this.route.params
      .subscribe(params => {
        let amp = params['amp'];
        console.log(amp);
        //ข้อมูลทั่วไป 
        this._productService.dbData1(57, amp)
          .subscribe(resproducts => this.models = resproducts,
          err => console.log(err)
          // , () => { }
          );
      });
  }

}
