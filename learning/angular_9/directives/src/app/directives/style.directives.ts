import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: "[appStyle]",
  standalone: true
})

export class appStyleDirective {
  @Input("appStyle") color: string = "blue";
  @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string} = {
    border: "2px",
    fontWeight: "normal",
    borderRadius: "10px"
  };
  @HostBinding("style.color") elColor: string | null = null;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, "fontSize", "20px");
    this.renderer.setStyle(this.element.nativeElement, "fontWeight", "normal");
  }

  @HostListener("click", ["$event"]) onClick(event: Event) {
    // event.target;
    console.log(event);
  }

  @HostListener("mouseenter") onEnter () {
    // this.renderer.setStyle(this.element.nativeElement, "color", this.color);
    this.elColor = this.color;
    this.renderer.setStyle(this.element.nativeElement, "border", this.dStyles.border);
    this.renderer.setStyle(this.element.nativeElement, "fontWeight", this.dStyles.fontWeight);
    this.renderer.setStyle(this.element.nativeElement, "borderRadius", this.dStyles.borderRadius);
  }

  @HostListener("mouseleave") onLeave () {
    // this.renderer.setStyle(this.element.nativeElement, "color", null);
    this.elColor = null;
    this.renderer.setStyle(this.element.nativeElement, "border", null);
    this.renderer.setStyle(this.element.nativeElement, "fontWeight", null);
    this.renderer.setStyle(this.element.nativeElement, "borderRadius", null);
  }
}
