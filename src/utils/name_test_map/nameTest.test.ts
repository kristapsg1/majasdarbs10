import { nameValidate } from "./name";

describe("name", () => {
  it("If value contains numbers", () => {
    const result = nameValidate("333");
    expect(result).toEqual(false);
  });
  it("If contains symbols", () => {
    const result = nameValidate("%");

    expect(result).toEqual(false);
  });
  it("if value contains 1 letters", () => {
    const result = nameValidate("a");

    expect(result).toEqual(false);
  });
  it("If valure is 10 letters", () => {
    const result = nameValidate("AbAbAbAbAb");

    expect(result).toEqual(true);
  });
  it("if value contains several types", () => {
    const result = nameValidate("as124$#@!");

    expect(result).toEqual(false);
  });
});
