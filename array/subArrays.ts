export function generateSubArrays(arr: number[]) {
  const n = arr.length;
  let subArrays = [];
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const subArray = arr.slice(i, j + 1);
      subArrays.push(subArray);
    }
  }

  return subArrays;
}

const arr = [1, 2, 3, 4, 5];
console.log(generateSubArrays(arr));
