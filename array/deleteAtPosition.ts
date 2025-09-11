export function deleteAtPosition(arr: number[], position: number) {
  if (position < 0 || position > arr.length) {
    console.log("Invalid Position");
  }

  for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;

  return arr;
}

const arr = [10, 20, 30, 40, 50];
const position = 2;

console.log(deleteAtPosition(arr, position));

// Use Built-In
arr.splice(2, 1);
console.log(arr)