//Created
function linerSearch(arr, num) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

const result = linerSearch([5, 4, 2, 9, 1, 13, 8, 15], 13);

console.log(result);
