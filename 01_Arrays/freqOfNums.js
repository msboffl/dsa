function freqOfNums(arr) {
  let freq = {};
  for (let num of arr) {
    if (freq[num]) {
      freq[num]++;
    } else {
      freq[num] = 1;
    }
  }
  return freq;
}

const arr = [2, 3, 2, 5, 3, 2, 4];
console.log(freqOfNums(arr));

function freqOfNumsMap(arr) {
  let map = new Map();

  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  return map;
}

console.log(freqOfNumsMap(arr));
