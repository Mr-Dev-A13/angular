import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS, IDummyTasks } from "../dummy-tasks";

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [
        TaskComponent
    ],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input({required: true}) userId!: string;
    @Input({ required: true }) name?: string;
    tasks: IDummyTasks[] = DUMMY_TASKS;

    get selectedUsersTasks(): IDummyTasks[] {
        return this.tasks.filter((task: IDummyTasks): boolean => task.userId === this.userId)
    }
}
