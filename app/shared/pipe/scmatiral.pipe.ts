import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'scmatiral'
})
export class ScmatiralPipe implements PipeTransform {

  transform(value: any, args: any): any {
    // console.log(value);
    // console.log(args);
    if (args > 0) {
      let dd = _.filter(value, { 'GROUPCODE': args });
      return dd;
    } else {
      return value;
    }
  }

}

@Pipe({
  name: 'scmatiral2'
})
export class ScmatiralPipe2 implements PipeTransform {

  transform(value: any, args: any, args1: any): any {
    // console.log(value);
    // console.log(args);
    if (args > 0 && args1 > 0) {
      let dd = _.filter(value, { 'GROUPCODE': args, 'TYPECODE': args1 });
      return dd;
    } else {
      return value;
    }
  }

}

@Pipe({
  name: 'scmatiral3'
})
export class ScmatiralPipe3 implements PipeTransform {

  transform(value: any, args: any): any {
    // console.log(value);
    // console.log(args);
    if (args != '') {
      let dd = _.filter(value, { 'id_ssjgroup': args });
      if (dd.length > 0) {
        return dd;
      } else {
        return value;
      }

    } else {
      return value;
    }
  }

}

@Pipe({
  name: 'scmatiral4'
})
export class ScmatiralPipe4 implements PipeTransform {

  transform(value: any, args: any): any {
    // console.log(value);
    // console.log(args);
    if (args != '') {
      let dd = _.filter(value, { 'CID': args });
      return dd;
    } else {
      return value;
    }
  }

}

@Pipe({
  name: 'sums'
})
export class SumsPipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log(value);
    console.log(args);
    let total = _.sumBy(value, function (o: any) { return Number(o[args]); });
    console.log(total);
    let total2 = total.toFixed(2);
    return total2;
  }

}




