import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS, IDummyUsers } from "./dummy-users";
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from "@angular/common";

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
    public users: IDummyUsers[] = DUMMY_USERS;
    public name: IDummyUsers['name'] | undefined = DUMMY_USERS[0].name;
    private selectedUserId: string | undefined;

    get selectedUser(): IDummyUsers {
        return this.users.find((user: IDummyUsers): boolean => user.id === this.selectedUserId)!;
    }

    onSelectedUser(id: string): void {
        this.selectedUserId = id;
    }
}
