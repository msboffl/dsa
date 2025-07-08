function letterCombinations(digits) {
  if (!digits.length) return [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let result = [];

  function backtrack(index, path) {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }
    let digit = digits[index];
    let letters = map[digit];
    for (let letter of letters) {
      backtrack(index + 1, path + letter);
    }
  }

  backtrack(0, "");

  return result;
}

const digits = "23";
console.log(letterCombinations(digits));
