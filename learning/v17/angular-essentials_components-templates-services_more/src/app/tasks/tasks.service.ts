import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../dummy-tasks";
import type { ITask } from "./task/task.model";
import type { NewTaskData } from "./new-task/new-task.model";


@Injectable({ providedIn: "root" })
export class TasksService {
    private copyDummyTasks: ITask[] = [...DUMMY_TASKS];

    getUserTasks( userId: string ): ITask[] {
        return this.copyDummyTasks.filter((task: ITask): boolean => task.userId === userId);
    };

    addTask( taskData: NewTaskData, userId: string ): void {
        this.copyDummyTasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        });
    };

    deleteTask( id: string ): void {
        this.copyDummyTasks = this.copyDummyTasks.filter((task: ITask): boolean => task.id !== id);
    };
}
