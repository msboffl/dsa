function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }

  return rev;
}

const num = 10;
const reverseNum = reverseNumber(num)
console.log(num ** reverseNum);

