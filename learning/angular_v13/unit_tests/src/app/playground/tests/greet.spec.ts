import { greet } from "../functions/greet";

describe("Greet function", () => {

  it("shout include text in return message", () => {
    const result = greet("Angular");
    // .toBe -> the actual value to be === to the expected value.
    // .toContain -> the actual value to contain a specific value.
    expect(result).toContain("Angular");
  })
})
