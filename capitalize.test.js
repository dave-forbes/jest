import capitalize from "./capitalize.js";

test("returns a string", () => {
  expect(typeof capitalize("hi")).toBe("string");
});

test("if variable isn't a string", () => {
  expect(capitalize([])).toBe("not a string");
  expect(capitalize(0)).toBe("not a string");
  expect(capitalize({})).toBe("not a string");
  expect(capitalize(true)).toBe("not a string");
  expect(capitalize()).toBe("not a string");
  expect(capitalize(null)).toBe("not a string");
});

test("returns string with capital letter at index 0", () => {
  expect(capitalize("hi")[0]).toBe("H");
});

test("returns string that is capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});
