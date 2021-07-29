import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  @Input() set appMyIf(isActive: boolean) {
    if (isActive) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, { data: '123', $implicit: 'Hello World!' });
    } else {
      this.viewContainerRef.clear();
    }
  };

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

}
