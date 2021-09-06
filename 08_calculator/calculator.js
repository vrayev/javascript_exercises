const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function (num) {
  if (num.length > 0) {
    const sum = num.reduce(myFunction);
    function myFunction(total, value) {
      return total + value;
    } return sum;
  } else
    return num.length;
};
const multiply = function (num) {
  let x = num.reduce(function (product, value) {
    return product * value;
  }); return x;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  if (num < 0)
    return -1;
  else if (num === 0)
    return 1;
  else {
    return (num * factorial(num - 1));
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
