import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import type { ITask } from "./task/task.model";
import type { NewTaskData } from "./new-task/new-task.model";


@Injectable({ providedIn: "root" })
export class TasksService {
    private copyDummyTasks: ITask[] = [...DUMMY_TASKS];

    constructor () {
        const tasks: string | null = localStorage.getItem("tasks");

        if (tasks) {
            this.copyDummyTasks = JSON.parse(tasks);
        }
    }

    public getUserTasks( userId: string ): ITask[] {
        return this.copyDummyTasks.filter((task: ITask): boolean => task.userId === userId);
    };

    public addTask( taskData: NewTaskData, userId: string ): void {
        this.copyDummyTasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        });
        this.saveTask();
    };

    public deleteTask( id: string ): void {
        this.copyDummyTasks = this.copyDummyTasks.filter((task: ITask): boolean => task.id !== id);
        this.saveTask();
    };

    private saveTask(): void {
        localStorage.setItem("tasks", JSON.stringify(this.copyDummyTasks));
    }
}
