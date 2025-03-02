import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from "./dummy-users";
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from "@angular/common";
import { type IUser } from "./user/user.model";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HeaderComponent,
        UserComponent,
        TasksComponent,
        NgFor,
        NgIf,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    public users: IUser[] = DUMMY_USERS;
    public name: IUser['name'] | undefined = DUMMY_USERS[0].name;
    public selectedUserId: string | undefined;

    get selectedUser(): IUser {
        return this.users.find((user: IUser): boolean => user.id === this.selectedUserId)!;
    }

    onSelectedUser(id: string): void {
        this.selectedUserId = id;
    }
}
