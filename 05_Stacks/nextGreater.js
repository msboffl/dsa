class NextGreaterElement {
  bruteForceNextGreater(arr) {
    const n = arr.length;
    const ans = Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
      for (let j = 1; j < n; j++) {
        if (arr[i] < arr[(i + j) % n]) {
        }
      }
    }

    return ans;
  }
}

const obj = new NextGreaterElement();

const arr = [1, 2, 3, 4];
console.log(obj.bruteForceNextGreater(arr));

