import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDiff'
})
export class TimeDiffPipe implements PipeTransform {

  transform(value: string): string {
    const ms = Date.now() - Date.parse(value);

    const msPerMin = 60 * 1000;
    const msPerHour = msPerMin * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerMonth * 12;
    
    if (ms < msPerMin) {
      return 'less than a minute ago';
    } else if (ms < msPerHour) {
      return (ms / msPerMin).toFixed(0) + ' minutes ago';
    } else if (ms < msPerDay) {
      return (ms / msPerHour).toFixed(0) + ' hours ago';
    } else if (ms < msPerMonth) {
      return (ms / msPerDay).toFixed(0) + ' days ago';
    } else if (ms < msPerYear) {
      return (ms / msPerMonth).toFixed(0) + ' months ago';
    } else {
      return (ms / msPerYear).toFixed(0) + ' years ago';
    }
  }

}
