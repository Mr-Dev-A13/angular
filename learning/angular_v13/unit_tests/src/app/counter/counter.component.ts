import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-counter",
  template: "Counter: {{counter}}",
})
export class CounterComponent {
  counter: number = 0;
  @Output() counterEmitter: EventEmitter<number> = new EventEmitter<number>();

  increment (): void {
    this.counter += 1;
    this.counterEmitter.emit(this.counter);
  };

  decrement (): void {
    this.counter -= 1;
  }
}
