function nestedRecur(n) {
  if (n > 100) {
    return n - 10;
  } else {
    return nestedRecur(nestedRecur(n + 11));
  }
}

const n = 95;
console.log(nestedRecur(n));
