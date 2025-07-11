function multipleTwoStrings(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const res = Array(num1.length + num2.length).fill(0);

  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();

  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      let digit1 = num1[i].charCodeAt(0) - "0".charCodeAt(0);
      let digit2 = num2[i].charCodeAt(0) - "0".charCodeAt(0);

      res[i + j] += digit1 * digit2;

      if (res[i + j] >= 10) {
        res[i + j + 1] += Math.floor(res[i + j] / 10);
        res[i + j] %= 10;
        console.log(res);
      }
    }
  }

  while (res.length > 1 && res[res.length - 1] === 0) {
    res.pop();
  }

  return res.reverse().join("");
}

const num1 = "123";
const num2 = "456";

console.log(multipleTwoStrings(num1, num2));


a = [1, 2, 4];