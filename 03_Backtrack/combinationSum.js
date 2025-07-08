// function combinationSum(arr, target) {
//   const ans = [];

//   arr.sort((a, b) => a - b)
//   function backtrack(start, path, sum) {
//     if (sum === target) {
//       ans.push([...path]);
//       return;
//     }

//     if (sum > target) {
//       return;
//     }

//     for (let i = start; i < arr.length; i++) {
//       path.push(arr[i]);
//       backtrack(i + 1, path, sum + arr[i]);
//       path.pop();
//     }
//   }

//   backtrack(0, [], 0);
//   return ans;
// }

// const arr = [10,1,2,7,6,1,5];
// const target = 8;
// console.log(combinationSum(arr, target));


a = [1, 2, 3];
b = [];

b.push(a);
console.log(b)

a.pop();

console.log(a); 
console.log(b)