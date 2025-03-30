import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type ITask } from "./task.model";
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from "@angular/common";
import { TasksService } from "../tasks.service";

@Component({
  selector: 'app-task',
  standalone: true,
    imports: [
        CardComponent,
        DatePipe
    ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  @Output() complete: EventEmitter<string> = new EventEmitter<string>();

  constructor (private _tasksService: TasksService) {}

  onCompleteTask(): void {
    this._tasksService.deleteTask(this.task.id);
  }
}
