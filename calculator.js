export function Calculator() {
  const add = (num1, num2) => {
    return num1 + num2;
  };

  const subtract = (num1, num2) => {
    return num1 - num2;
  };

  const divide = (num1, num2) => {
    return num1 / num2;
  };

  return { add, subtract };
}
