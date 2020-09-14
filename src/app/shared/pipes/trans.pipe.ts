import { Helper } from './../helper';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trans'
})
export class TransPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Helper.trans(value);
  }

}
