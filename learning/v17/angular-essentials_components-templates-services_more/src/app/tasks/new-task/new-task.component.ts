import { Component, EventEmitter, Output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { type NewTaskData } from "./new-task.model";

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
  @Output() add: EventEmitter<NewTaskData> = new EventEmitter<NewTaskData>();
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

  onSubmit(): void {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
