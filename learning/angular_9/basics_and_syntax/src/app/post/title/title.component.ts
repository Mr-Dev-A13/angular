import { Component } from "@angular/core";

@Component({
  selector: "post-title",
  standalone: true,
  template: `
    <h2 class="post-title">Post Component</h2>
  `,
  styles: [`
    .post-title {
      color: darkgray;
    }
  `]
})

export class TitleComponent {}
