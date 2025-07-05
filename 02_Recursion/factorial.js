function factorial(n) {
  if (n === 0) return 1;
  else {
    return factorial(n - 1) * n;
  }
}

const n = 5;
console.log(factorial(5));
