import reverseString from "../src/reverseString";

test("returns a string", () => {
  expect(typeof reverseString("hi")).toBe("string");
});

test("if variable isn't a string", () => {
  expect(reverseString([])).toBe("not a string");
  expect(reverseString(0)).toBe("not a string");
  expect(reverseString({})).toBe("not a string");
  expect(reverseString(true)).toBe("not a string");
  expect(reverseString()).toBe("not a string");
  expect(reverseString(null)).toBe("not a string");
});

test("returns string reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});
