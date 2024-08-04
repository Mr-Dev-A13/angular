import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostComponent } from "./post/post.component";

@Component({
  selector: 'basics_and_syntax',
  standalone: true,
  imports: [RouterOutlet, PostComponent, FormsModule],
  templateUrl: './b_and_s.component.html',
  styleUrl: './b_and_s.component.scss'
})

export class B_and_sComponent {
  title: string = 'React';
  inputValue: string = "Type";
  imgPath: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s";

  constructor () {
    setTimeout(() => {
      this.title = "Angular";
      this.imgPath = "https://yt3.googleusercontent.com/y4J_Fs5ksRlxx6_LzT1VKxVqH_T8Vyn_RN_YYgLJhuMzBS5qxTgm7NlEcMkQd3hgCpfWtYcEUg=s900-c-k-c0x00ffffff-no-rj";
    }, 2000);
  }

  onInputHandler(event: Event) {
    // this.inputValue = (<HTMLInputElement>event.target).value;
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onKeyUpHandler(input: any) {
    // console.log(input.value);
  }

  onClickHandler () {
    this.inputValue = "";
  }
}
