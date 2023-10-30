import { analyzeArray } from "../src/analyzeArray";

test("returns an object", () => {
  expect(typeof analyzeArray([])).toBe("object");
});

test("returns object with properties, average, min, max and length", () => {
  const object = analyzeArray([]);
  expect(Object.hasOwn(object, "average")).toBe(true);
  expect(Object.hasOwn(object, "min")).toBe(true);
  expect(Object.hasOwn(object, "max")).toBe(true);
  expect(Object.hasOwn(object, "length")).toBe(true);
});

test("object.average is the mean of all the numbers in the array", () => {
  const object1 = analyzeArray([1, 2, 3]);
  expect(object1.average).toBe(2);
  const object2 = analyzeArray([11, 232, 31232, 41, 5, 61]);
  expect(object2.average).toBe(5263.67);
});

test("object.min is the smallest number in the array", () => {
  const object1 = analyzeArray([1, 2, 3]);
  expect(object1.min).toBe(1);
  const object2 = analyzeArray([11, 232, 31232, 41, 5, 61]);
  expect(object2.min).toBe(5);
});

test("object.max is the largest number in the array", () => {
  const object1 = analyzeArray([1, 2, 3]);
  expect(object1.max).toBe(3);
  const object2 = analyzeArray([11, 232, 31232, 41, 5, 61]);
  expect(object2.max).toBe(31232);
});

test("object.length is the length of the array", () => {
  const object1 = analyzeArray([1, 2, 3]);
  expect(object1.length).toBe(3);
  const object2 = analyzeArray([11, 232, 31232, 41, 5, 61]);
  expect(object2.length).toBe(6);
});
