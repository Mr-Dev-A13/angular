import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-post',
  standalone: true,
  imports: [],
  templateUrl: './ng-post.component.html',
  styleUrl: './ng-post.component.scss'
})
export class NgPostComponent {
  // Interpolation...
  content = "Command ng generate component (g c)"
}
