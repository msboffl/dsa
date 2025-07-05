function sumOfNNumbers(n) {
  if (n == 0) return 0;
  else {
    return sumOfNNumbers(n - 1) + n;
  }
}

const n = 5;
console.log(sumOfNNumbers(5))