const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (typeof num1 != "number" || typeof num2 != "number") return "ERROR";
  let tot = 0;
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  for (let i = min; i < max + 1; i++) {
    tot += i;
  }
  return tot;
};

// Do not edit below this line
module.exports = sumAll;
