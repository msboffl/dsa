function mean(arr) {
  const n = arr.length;
  if (n === 0) return 0;
  return sum(arr, 0) / n;
}

function sum(arr, i) {
  if (i === arr.length) return 0;
  return arr[i] + sum(arr, i + 1);
}
const arr = [1, 2, 3, 4, 5];
console.log(mean(arr));
