import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
  title: string = "";
  text: string = "";

  addPost () {
    if (this.title.trim() && this.text.trim()) {
      const post = {
        title: this.title,
        text: this.text
      }

      console.log(post);

      this.title = "";
      this.text = "";
    }
  }
}
