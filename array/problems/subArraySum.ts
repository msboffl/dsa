export function subarraySum(arr: number[], target: number): number[] {
  let start = 0;
  let sum = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    // Shrink window if sum exceeds target
    while (sum > target && start < end) {
      sum -= arr[start];
      start++;
    }

    // Check if we found the target sum
    if (sum === target) {
      return [start + 1, end + 1];
    }
  }

  return [-1];
}

// Prefix

const arr = [1, 2, 3, 7, 5];
const target = 12;
console.log(subarraySum(arr, target));
