export function deleteAtBeginning(arr: number[]) {
  if (arr.length === 0) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return arr;
}

const arr = [10, 20, 30, 40];
console.log(deleteAtBeginning(arr));

// Use Built-In
arr.shift()
console.log(arr)