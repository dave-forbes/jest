import { Calculator } from "./calculator";

const calculator = Calculator();

test("returns a number", () => {
  expect(typeof calculator.add(1, 2)).toBe("number");
  expect(typeof calculator.subtract(1, 2)).toBe("number");
});
