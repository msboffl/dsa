export function deleteAtEnd(arr: number[]) {
  if (arr.length === 0) return arr;

  arr.length = arr.length - 1;
  return arr;
}

const arr = [10, 20, 30, 40];

console.log(deleteAtEnd(arr));

// Use Built-In
arr.pop();
console.log(arr);
