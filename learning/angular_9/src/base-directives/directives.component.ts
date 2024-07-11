import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppStyleDirective } from "./directives/style.directive";
import { IfNotDirective } from "./directives/ifNot.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TitleCasePipe,
    FormsModule,
    AppStyleDirective,
    IfNotDirective,
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  title: string = 'directives';
  isVisible: boolean = true;
}
