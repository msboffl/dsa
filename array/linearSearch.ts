export function linearSearch(arr: number[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}

const arr = [10, 20, 30, 40, 50];
const target = 40;

console.log(linearSearch(arr, target));
