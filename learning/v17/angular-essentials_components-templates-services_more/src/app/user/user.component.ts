import { Component } from '@angular/core';
import { DUMMY_USERS, IDummyUsers } from "../dummy-users";

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser: IDummyUsers = DUMMY_USERS[randomIndex];
}
