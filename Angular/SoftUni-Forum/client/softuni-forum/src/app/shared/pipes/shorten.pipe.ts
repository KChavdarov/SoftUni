import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, length: number = 10): string {
    let result = value;
    if (value.length > length) {
      result = value.substring(0, length) + '...';
    }
    return result;
  }

}
