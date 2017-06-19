import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";
import { DomSanitizer } from '@angular/platform-browser';

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
      let dd = _.filter(value, { 'c_groupssj': args });
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

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    // console.log(url);
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}





