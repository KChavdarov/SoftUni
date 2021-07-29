import { Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {  //implements OnChanges {

  // @Input() isActive!: boolean;

  // @Input() set isActive(isActive: boolean) {
  //   if (isActive) {
  //     this.elementRef.nativeElement.style.color = 'red';
  //   } else {
  //     this.elementRef.nativeElement.style.color = 'black';
  //   }
  // }

  @HostBinding('style.color') color!: string;

  @Input() set appHighlight(isActive: boolean) {
    if (isActive) {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
  }


  constructor(private elementRef: ElementRef) {}

  // ngOnChanges() {
  //   if (this.isActive) {
  //     this.elementRef.nativeElement.style.color = 'red';
  //   } else {
  //     this.elementRef.nativeElement.style.color = 'black';
  //   }
  // };
}
