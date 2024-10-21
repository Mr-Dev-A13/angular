import {Component} from "@angular/core";

@Component({
  selector: "app-counter",
  template: "Counter: {{counter}}",
})
export class CounterComponent {
  counter: number = 0;

  increment (): void {
    this.counter += 1;
  };

  decrement (): void {
    this.counter -= 1;
  }
}
