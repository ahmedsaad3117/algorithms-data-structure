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

let langs = ["HTML", "JavaScript", "React", "Go", "CSS"];


function sorting(num1, num2){
  return num1 - num2
}

langs = langs.sort((a,b)=> a-b)

console.log(langs,"asdfasd")