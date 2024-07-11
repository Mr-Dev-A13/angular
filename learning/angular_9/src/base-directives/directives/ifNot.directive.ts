import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfNot]',
  standalone: true
})
export class IfNotDirective {
  @Input() set appIfNot (condition: boolean) {
    if (!condition) {
      // Show context
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // Skip context
      this.viewContainer.clear()
    }
  }


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  )
  {

  }

}
