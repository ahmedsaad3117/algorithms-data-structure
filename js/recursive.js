//Created
function recursiveCounter(num) {
  if (num < 0) {
    return "Done";
  }
  num--;
  recursiveCounter(num);
}

//recursiveCounter(5);

//Created
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

//console.log(sumRange(3));

//Created
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

//console.log(factorial(4));

//Created
function getEven(arr) {
  const result = [];

  function recursive(subArr) {
    if (subArr.length === 0) return;

    if (subArr[0] % 2 === 0) {
      result.push(subArr[0]);
    }

    recursive(subArr.splice(1));
  }

  recursive(arr);

  return result;
}

//console.log(getEven([4, 2, 3, 6, 4, 5, 8]));
