// 1. Brute Force Approach
function countLessEqualBrute(a: number[], b: number[]): number[] {
  const ans: number[] = [];
  for (let i = 0; i < a.length; i++) {
    let count: number = 0;
    for (let j = 0; j < b.length; j++) {
      if (b[j] <= a[i]) count++;
    }
    ans.push(count);
  }

  return ans;
}

// 2. Sorting Approach
function countLessEqualSort(a: number[], b: number[]): number[] {
  function binarySearch(b: number[], element: number): number {
    let ans: number = -1;
    let left = 0;
    let right = b.length - 1;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (b[mid] <= element) {
        ans = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return ans+1;
  }

  const ans: number[] = [];
  b.sort((x, y) => x - y);
  for (let i = 0; i < a.length; i++) {
    let element: number = a[i];
    let count: number = binarySearch(b, element);
    ans.push(count);
  }

  return ans;
}

const a: number[] = [4, 8, 7, 5, 1];
const b: number[] = [4, 48, 3, 0, 1, 1, 5];
// console.log(countLessEqualBrute(a, b));
console.log(countLessEqualSort(a, b));
