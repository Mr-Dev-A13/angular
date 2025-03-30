import { Component, EventEmitter, inject, Input, Output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { TasksService } from "../tasks.service";

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
  @Input({ required: true }) userId!: string;
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();
  // For signal
  // enteredTitle: WritableSignal<string> = signal("");
  // enteredSummary: WritableSignal<string> = signal("");
  // enteredDate: WritableSignal<string> = signal("");
  enteredTitle: string = "";
  enteredSummary: string = "";
  enteredDate: string = "";
  private tasksService: TasksService = inject(TasksService);

  onCancel(): void {
    this.close.emit(false);
  }

  onSubmit(): void {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit(false);
  }
}
