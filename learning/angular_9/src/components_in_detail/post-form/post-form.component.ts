import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Post } from "../c_in_d.component";

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
  // Old
  // @ViewChild('titleInputRef', {static: false}) titleInputRef?: ElementRef;
  // New
  @ViewChild('titleInputRef') titleInputRef?: ElementRef;


  title: string = "";
  text: string = "";

  addPost () {
    if (this.title.trim() && this.text.trim()) {
      const post = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post);
      this.title = "";
      this.text = "";
    }
  }

  onFocusTitle () {
    this.titleInputRef?.nativeElement.focus();
  }
}
