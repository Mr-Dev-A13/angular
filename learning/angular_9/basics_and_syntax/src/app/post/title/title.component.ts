import { NgStyle, NgClass } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "post-title",
  standalone: true,
  imports: [NgStyle, NgClass],
  template: `
    <div style="display: flex; align-items: center">
      <h2 class="post-title">Post Component</h2>
      <div
        [ngStyle] = "{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid red',
        marginLeft: '5px',
        backgroundColor: currentColor ? 'white' : 'red'
      }"
      ></div>
      <button
        [ngClass]="{
            defaultText: currentColor,
            activeText: !currentColor
        }"
        [class.clicked] = !currentColor
        [class.default] = currentColor
        style="margin-left: 5px"
        (click) = "onToggleHandler()"
      >Toggle</button>
    </div>
  `,
  styles: [`
    .post-title {
      color: darkgray;
    }

    .default {
      background-color: white;
    }

    .clicked {
      background-color: gainsboro;
    }

    .defaultText {
      color: purple;
    }

    .activeText {
      color: palevioletred;
    }
  `]
})

export class TitleComponent {
  currentColor = true;

  onToggleHandler () {
    this.currentColor = !this.currentColor;
  }
}
