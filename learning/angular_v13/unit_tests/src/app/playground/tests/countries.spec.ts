import { getCountries } from "../functions/countries";

describe("Countries", () => {
  it("Should return the countries", () => {
    const result = getCountries();

    expect(result).toContain("AM");
    expect(result).toContain("US");
    expect(result).toContain("EU");
  })
})
