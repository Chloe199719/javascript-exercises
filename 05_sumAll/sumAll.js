const sumAll = function (a, b) {
  let int1 = 0;
  let int2 = 0;
  if (a > b) {
    int1 = b;
    int2 = a;
  } else {
    int1 = a;
    int2 = b;
  }
  sum = 0;
  if (typeof int1 === `number` && typeof int2 === `number`) {
    if (int1 >= 1 && int2 >= 1) {
      do {
        sum += int2--;
      } while (int2 >= 0);
    } else return "ERROR";
  } else return "ERROR";
  // if((typeof int1) === `number` && (typeof int2)  === `number`)
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
