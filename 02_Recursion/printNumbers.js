// Print Numbers from 1 to 5 -> (1, 2, 3, 4, 5)
function printNumbers(n) {
  if (n < 1) return;
  else {
    printNumbers(n - 1);
    console.log(n);
  }
}

const n1 = 5;
printNumbers(n1);

// Print Numbers from 5 to 1 -> (5, 4, 3, 2, 1)
function printNumsReverse(n) {
  if (n < 1) return;
  else {
    printNumsReverse(n - 1);
    console.log(n);
  }
}

const n2 = 5;
printNumsReverse(n2);
