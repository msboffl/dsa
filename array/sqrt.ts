export function squareRoot(x: number) {
  if (x === 0 || x === 1) return x;

  let left = 1;
  let right = Math.floor(x / 2);
  let ans = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid * mid === x) return mid;
    else if (mid * mid < x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
}

console.log(squareRoot(4));
