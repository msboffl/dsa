function funA(n) {
  if (n > 0) {
    console.log(n);
    funB(n - 1);
  }
}

function funB(n) {
  if (n > 1) {
    console.log(n);
    funA(n/2);
  }
}

const n = 20;
funA(n);
