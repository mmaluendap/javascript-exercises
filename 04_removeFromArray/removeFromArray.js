const removeFromArray = function (array) {
  let argsToRemove = [];
  for (let i = 1; i < arguments.length; i++) {
    argsToRemove.push(arguments[i]);
  }
  return array.filter((element) => !argsToRemove.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
