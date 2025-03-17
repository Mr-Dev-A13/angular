import {Component, EventEmitter, Output, signal, WritableSignal} from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  // For signal
  // enteredTitle: WritableSignal<string> = signal("");
  // enteredSummary: WritableSignal<string> = signal("");
  // enteredDate: WritableSignal<string> = signal("");
  enteredTitle: string = "";
  enteredSummary: string = "";
  enteredDate: string = "";

  onCancel(): void {
    this.cancel.emit(false);
  }
}
