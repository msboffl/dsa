const num = 50;
const binary = num.toString(2);

console.log(binary); // "110010"
console.log(typeof binary); // "string"

let even = 0;
let odd = 0;

// Loop from right to left, so we assign correct index (starting from 0)
for (let i = binary.length - 1, idx = 0; i >= 0; i--, idx++) {
  if (idx % 2 === 0 && binary[i] === '1') {
    even++;
  } 
  if (idx % 2 === 1 && binary[i] === '1') {
    odd++;
  }
}

console.log([even, odd]); // [1, 2]
