const arr: number[] = [10, 20, 30, 40, 50];

// Linear Traversal
console.log("==== Linear Traversal ====");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("==== Reverse Traversal ====");
// Reverse Traversal
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
