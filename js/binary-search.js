function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === num) {
      return middle;
    } else if (arr[middle] > num) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

const result = binarySearch([1, 2, 5, 7, 8], 5);

console.log(result);
