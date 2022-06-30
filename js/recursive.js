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

function power(num, pow) {
  if (pow === 0) return 1;
  return num * power(num, pow - 1);
}

console.log(power(2, 3));

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const obj2 = {};

console.log("" in obj2);

function collectStrings2(obj) {
  if (Object.keys(obj).length === 0) return;

  const result = [];

  function isString() {
    if (Object.keys(obj).length === 0) return;

    for (key in obj) {
      if (typeof obj[key] === "string") {
        result.push(obj[key]);
      }
    }
  }
}

//Not created
function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      console.log(stringsArr);
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}

const result2 = collectStrings(obj);

let obj3 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj2) {
  for (key in obj2) {
    if (typeof obj2[key] === "number") {
      console.log(obj2[key].toString());
      obj2[key] = obj2[key].toString();
    } else if (typeof obj2[key] === "object") {
      stringifyNumbers(obj2[key]);
    }
  }

  return obj2;
}

function stringifyNumbersUdemy(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const result3 = stringifyNumbers(obj3);


console.log(result3);

const result4 = stringifyNumbersUdemy(obj3);
console.log(result4);