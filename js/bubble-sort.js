function bubblSort(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubblSort([3, 4, 2, 1]));

function bubblSortV2(arr) {
  let isSwaped;
  for (let i = arr.length; i  > 0; i--) {
    isSwaped = true;
    for (let j = 0; j < i -1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];  
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwaped = false;
      }
    }
    if (isSwaped) break;
  }

  return arr;
}
  
console.log(bubblSortV2([3, 4, 2, 1]));
