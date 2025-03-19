import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { type ITask } from "./task/task.model";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from "./new-task/new-task.model";
import {TasksService} from "./tasks.service";

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [
        TaskComponent,
        NewTaskComponent
    ],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input({required: true}) userId!: string;
    @Input({ required: true }) name?: string;
    isAddingTask: boolean = false;

    constructor (private _tasksService: TasksService) {}

    get selectedUsersTasks(): ITask[] {
        return this._tasksService.getUserTasks(this.userId);
    }

    onAddTask(taskData: NewTaskData): void {
        this._tasksService.addTask(taskData, this.userId);
        this.isAddingTask = false;
    }

    onCompleteTask(id: string): void {
        this._tasksService.deleteTask(id);
    }

    onStartAddTask(): void {
        this.isAddingTask = true;
    }

    onCancelAddTask(): void {
        this.isAddingTask = false;
    }
}
