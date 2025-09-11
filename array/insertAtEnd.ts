export function insertAtEnd(arr: number[], element: number) {
  arr[arr.length] = element;

  return arr;
}

const arr = [10, 20, 30];
const element = 40;

console.log(insertAtEnd(arr, element));

// Use Built-In
arr.push(50);
console.log(arr);
