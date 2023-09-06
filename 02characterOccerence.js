// const a = "nihal";
// const b = {};

// for (i = 0; i < a.length; i++) {
//   c = a[i];
// chatAt
//   console.log(b);
// }

const a = "nihaal";
const b = {};
const d = {};

for (let i = 0; i < a.length; i++) {
  const c = a.charAt(i);

  const charCode = c.charCodeAt(0); // Get the ASCII code of the character
  const positionInAlphabet = charCode - 96; // Calculate the position in the alphabet (assuming lowercase letters)
  b[c] = positionInAlphabet; // Store the position in the 'b' object using the character as the key

  d[c] = c.length;
}

console.log(b);
console.log(d);



// SELECT tb_1.*, tb_2.* FROM sourcedb.products tb_1 LEFT JOIN targetdb.prices tb_2 ON tb_1.product_id = tb_2.product_id;
