function reverseString(str, n) {
  if (n === 0) return;
  else if (n === 1) return str[0];
  return str[n - 1] + reverseString(str, n - 1);
}

const str = "Mareedu Saibabu"; // ubabuaS udeeraM
console.log(reverseString(str, str.length));

function stringLength(str, i = 0) {
  if (str[i] === undefined) return 0;
  return 1 + stringLength(str, i + 1);
}

console.log(stringLength(str));
