import { Component, computed, signal, Signal, WritableSignal } from '@angular/core';
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
  selectedUser: WritableSignal<IDummyUsers> = signal(DUMMY_USERS[randomIndex]);
  imagePath: Signal<string> = computed((): string => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath (): string {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectedUser (): void {
    const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
