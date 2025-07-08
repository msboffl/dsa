function permutations(str, left, right) {
  if (left === right) {
    console.log(str);
    return;
  }

  for (let i = left; i <= right; i++) {
    str = swap(str, left, i);
    permutations(str, left + 1, right);
    str = swap(str, left, i);
  }
}

function swap(str, i, j) {
  let arr = str.split("");
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr.join("");
}
const str = "ABC";
permutations(str, 0, str.length - 1);
