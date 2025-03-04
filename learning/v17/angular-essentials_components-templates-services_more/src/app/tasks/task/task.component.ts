import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type ITask } from "./task.model";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  @Output() complete: EventEmitter<string> = new EventEmitter<string>();

  onCompleteTask(): void {
    this.complete.emit(this.task.id);
  }
}
