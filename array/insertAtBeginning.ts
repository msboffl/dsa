export function insertAtBeginning(arr: number[], element: number) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = element;
  return arr;
}

const arr = [20, 30];
const element = 10;
console.log(insertAtBeginning(arr, element));
