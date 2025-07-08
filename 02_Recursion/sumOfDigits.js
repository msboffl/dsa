function sumOfDigits(n) {
  if (n === 0) return 0;
  return sumOfDigits(Math.floor(n / 10)) + (n % 10);
}

const n = 15;
console.log(sumOfDigits(n));
