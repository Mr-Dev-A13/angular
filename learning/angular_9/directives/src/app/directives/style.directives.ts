import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: "[appStyle]",
  standalone: true
})

export class appStyleDirective {
  @Input("appStyle") color: string = "blue";
  @Input() fontWeight: string = "normal";

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, "fontSize", "20px");
    this.renderer.setStyle(this.element.nativeElement, "fontWeight", "normal");

    console.log(this.color)
  }

  @HostListener("click", ["$event"]) onClick(event: Event) {
    // event.target;
    console.log("The click worked");
    console.log(event);
  }

  @HostListener("mouseenter") onEnter () {
    this.renderer.setStyle(this.element.nativeElement, "color", this.color);
    this.renderer.setStyle(this.element.nativeElement, "fontWeight", this.fontWeight);
  }

  @HostListener("mouseleave") onLeave () {
    this.renderer.setStyle(this.element.nativeElement, "color", null);
    this.renderer.setStyle(this.element.nativeElement, "fontWeight", null);
  }
}
