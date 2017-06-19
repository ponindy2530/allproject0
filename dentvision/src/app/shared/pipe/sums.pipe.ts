import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'sums'
})
export class SumsPipe implements PipeTransform {

  transform(value: any, args: any): any {
    // console.log(value);
    // console.log(args);
    let total = _.sumBy(value, function (o: any) { return Number(o[args]); });
    // console.log(total);
    // let total2 =total.toFixed(2);
    return total;
  }

}
