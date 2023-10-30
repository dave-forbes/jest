import { Calculator } from "../src/calculator";

const calculator = Calculator();

test("returns a number", () => {
  expect(typeof calculator.add(1, 2)).toBe("number");
  expect(typeof calculator.subtract(1, 2)).toBe("number");
  expect(typeof calculator.divide(1, 2)).toBe("number");
  expect(typeof calculator.multiply(1, 2)).toBe("number");
});

test("'add' adds two numbers together", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("'subtract' subtracts one number from the other", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("'divide' divides one number from the other", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("'multiply' multiplies two numbers together", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
