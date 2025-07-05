function power(m, n) {
  if (n == 0) return 1;
  else {
    return power(m, n - 1) * m;
  }
}

const m = 2;
const n = 9;
console.log(power(m, n));

// console.log(Math.pow(2, 9))

function powerReduceCalls() {
  if (n == 0) return 1;
  if (n % 2 == 0) {
    return power(m * m, n / 2);
  } else {
    return power(m * m, (n - 1) / 2) * m;
  }
}

console.log(powerReduceCalls(2, 9));
