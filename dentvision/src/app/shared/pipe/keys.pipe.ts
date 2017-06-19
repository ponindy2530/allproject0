import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value, args: any[]): any {
    let keys = [];
    for (let key in value[0]) {
      keys.push(key);
    }
    return keys;
  }

}


