import {
  Component,
  Input,
  Output,
  EventEmitter,
  input,
  computed,
  InputSignal,
  Signal,
  output,
  OutputEmitterRef
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // ---> Decorators <---
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  // ---> Function <---
  // select: OutputEmitterRef<string> = output<string>();

  // ---> Signals <---
  // name: InputSignal<string> = input.required<string>();
  // avatar: InputSignal<string> = input.required<string>();

  get imagePath (): string {
    return 'assets/users/' + this.avatar;
  }

  // ---> Signal <---
  // imagePath: Signal<string> = computed((): string => 'assets/users/' + this.avatar());

  onSelectedUser (): void {
    this.select.emit(this.id);
  }
}
