function decimalToBinary(n) {
  if (n === 0) return '';
  return (n % 2) + decimalToBinary(Math.floor(n / 2));
}

const n = 13;
console.log(decimalToBinary(n));
