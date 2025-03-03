import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from "../dummy-tasks";
import { type ITask } from "./task/task.model";
import {NewTaskComponent} from "./new-task/new-task.component";

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
    tasks: ITask[] = DUMMY_TASKS;

    get selectedUsersTasks(): ITask[] {
        return this.tasks.filter((task: ITask): boolean => task.userId === this.userId)
    }

    onCompleteTask(id: string): void {
        this.tasks = this.tasks.filter((task: ITask): boolean => task.id !== id);
    }

    onStartAddTask(): void {
        this.isAddingTask = true;
    }
}
