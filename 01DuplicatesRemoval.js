// function removeDuplicates(arr) {
//   const uniqueElements = {};
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (!uniqueElements[element]) {
//       result.push(element);
//       uniqueElements[element] = true;
//     }
//   }
//   //   console.log(result);
//   return result;
// }

// // Example usage
// const inputArray = [3, 2, 5, 2, 7, 3, 8];
// const result = removeDuplicates(inputArray);
// console.log(result); // Output: [3, 2, 5, 7, 8]

//-------------------------------------------------//

const array1 = [1, 3, 4, 5, 55, 6, 666, 777, 777];
uniqEle = {};
res = [];

for (let i = 0; i < array1.length; i++) {
  const element = array1[i];
  if (!uniqEle[element]) {
    res.push(element);
    uniqEle[element] = true;
  }
}

console.log(res);

//-----------------------------------------------//

