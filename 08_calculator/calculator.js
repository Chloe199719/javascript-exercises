const add = function (...num) {
  let sum = 0;
  for (const arg of num) {
    sum += arg;
  }
  return sum;
};

const subtract = function (a, ...num) {
  let sum = a;
  for (const arg of num) {
    sum -= arg;
  }

  return sum;
};

const sum = function (num) {
  let sum = 0;
  for (const arg of num) {
    sum += arg;
  }

  return sum;
};

const multiply = function (num) {
  let sum = 1;
  for (const arg of num) {
    sum = sum * arg;
  }
  return sum;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let sum = 1;
  if (!(a <= 1)) {
    do {
      sum = sum * a--;
    } while (a >= 1);
  } else return 1;
  return sum;
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
