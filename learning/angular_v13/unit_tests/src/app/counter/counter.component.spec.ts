import { CounterComponent } from "./counter.component";

describe("CounterComponent", () => {
  let component: CounterComponent;

  // beforeAll(), afterEach(), afterAll();
  beforeEach(() => {
    component = new CounterComponent();
  });

  it("should increment count by 1", () => {
    component.increment();
    expect(component.counter).toBe(1);
  });

  it("should decrement count by 1", () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });

  it("should increment value by event emitter", () => {
    let result: number = 0;
    component.counterEmitter.subscribe(v => result = v);
    component.increment();
    expect(result).toBe(1);
  })
})
