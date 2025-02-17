import { Component, Input, input, computed, InputSignal, Signal } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  // name: InputSignal<string> = input.required<string>();
  // avatar: InputSignal<string> = input.required<string>();

  get imagePath (): string {
    return 'assets/users/' + this.avatar;
  }
  // imagePath: Signal<string> = computed((): string => 'assets/users/' + this.avatar());

  onSelectedUser (): void {}
}
