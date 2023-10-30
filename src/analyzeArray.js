export function analyzeArray(array) {
  return createObject(average(array), min(array), max(array), array.length);
}

function createObject(average, min, max, length) {
  return { average, min, max, length };
}

function average(array) {
  if (array === []) return null;
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const average = sum / array.length;
  return Math.round(average * 100) / 100;
}

function min(array) {
  if (array === []) return null;
  let min = array[0];
  array.forEach((element) => {
    if (element < min) min = element;
  });
  return min;
}

function max(array) {
  if (array === []) return null;
  let max = array[0];
  array.forEach((element) => {
    if (element > max) max = element;
  });
  return max;
}
