function treeRecursion(n) {
  if (n > 0) {
    console.log(n);
    treeRecursion(n - 1);
    treeRecursion(n - 1);
  }
}

const n = 3;
treeRecursion(n);
