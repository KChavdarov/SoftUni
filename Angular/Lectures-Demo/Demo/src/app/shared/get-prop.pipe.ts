import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getProp'
})
export class GetPropPipe implements PipeTransform {

  transform(value: Record<string | number, any>, path: Array<string | number>): any {
    let result = value;
    for (const item of path) {
      if (!result) { return; }
      result = result[item];
    }
    return result;
  }

}
