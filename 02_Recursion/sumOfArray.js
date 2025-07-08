function sumOfArrElements(arr) {
  if (arr.length === 0) return 0;
  return sum(arr, 0);
}

function sum(arr, i) {
  if (arr.length === i) return 0;
  return arr[i] + sum(arr, i + 1);
}

const arr = [1, 2, 3, 4, 5];
console.log(sumOfArrElements(arr));
