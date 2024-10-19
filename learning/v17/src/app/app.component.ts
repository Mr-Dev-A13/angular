import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core'
import { ModalComponent } from "./modal/modal.component";
import { RefDirective } from "./modal/ref.directive";
import {Meta, Title} from "@angular/platform-browser";
// import { AuthService } from "./routing/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RefDirective, { static: false }) refDir!: RefDirective;

  constructor(
    // protected auth: AuthService,
    private resolver: ComponentFactoryResolver,
    private appTitle: Title,
    private appMeta: Meta
  ) {
    this.appTitle.setTitle("Angular V17");
    this.appMeta.addTags([
      {name: "keywords", content: "angular, V17, module"},
      {name: "description", content: "angular version 17"},
    ])
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    const component = this.refDir.containerRef.createComponent(modalFactory);
    component.instance.title = "Angular modal";
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    })

  }
}

