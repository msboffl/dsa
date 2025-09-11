export function insertAtPosition(
  arr: number[],
  element: number,
  position: number
) {
  if (position < 0 || position > arr.length) {
    console.log("Invalid Position");
  }
  for (let i = arr.length; i > position; i--) {
    arr[i] = arr[i - 1];
  }

  arr[position] = element;

  return arr;
}

const arr = [10, 20, 40, 50];
const position = 2;
const element = 30;

console.log(insertAtPosition(arr, element, position));

// Use Built-In
arr.splice(2, 0, 25)

console.log(arr);
