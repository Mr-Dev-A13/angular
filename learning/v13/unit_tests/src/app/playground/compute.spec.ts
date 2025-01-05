import { compute } from "./compute";

describe("compute", () => {
  it("should return 0 if returned negative number", () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it("should increment input if possible", () => {
    const result = compute(1);
    expect(result).toBe(2);
  })
})
