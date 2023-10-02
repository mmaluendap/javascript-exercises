const repeatString = function (string, num) {
  if (num < 0) return "ERROR";
  let results = "";
  for (let i = 0; i < num; i++) {
    results += string;
  }
  return results;
};

// Do not edit below this line
module.exports = repeatString;
