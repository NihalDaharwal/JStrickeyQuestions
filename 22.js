// function sumOfNestedArray(givenArray) {
//   return givenArray.flat(Infinity).reduce((acc, curr) => acc + curr);
// }

// const givenArray = [1, 2, [3, 4], 5, [6, 7, [8], 9], 10]; // output -> 55
// sumOfNestedArrayCustomMethod(givenArray);

// --------------------------------------------------

function sumOfNestedArrayCustomMethod(givenArray) {
  let sum = 0;
  // const updatedArray = [];
  for (i = 0; i < givenArray.length; i++) {
    if (Array.isArray(givenArray[i])) {
      let b = givenArray[i];
      sum += sumOfNestedArrayCustomMethod(b);
      // for (j = 0; j < b.length; j++) {

      //   if (Array.isArray(b[j])) {
      //     // updatedArray.push(...b[j]);
      //   } else {
      //     updatedArray.push(b[j]);
      //   }
      // }
    } else {
      // updatedArray.push(givenArray[i]);
      sum += givenArray[i];
    }
  }
  console.log("updatedArray", updatedArray);

  // for (i = 0; i < updatedArray.length; i++) {
  //   sum += updatedArray[i];
  // }

  return sum;
}
const givenArray = [1, 2, [3, 4], 5, [6, 7, [8], 9], 10]; // output -> 55
console.log("SUM: ", sumOfNestedArrayCustomMethod(givenArray));

// ----------------------------------------------------------
// function sumOfNestedList(givenArray) {
//   let sum = 0;
//   for (let element of givenArray) {
//     if (Array.isArray(element)) {
//       sum += sumOfNestedList(element);
//     } else {
//       sum += element;
//     }
//   }

//   return sum;
// }

// const givenArray = [1, 2, [3, 4], 5, [6, 7, [8, [2, 3]], 9], 10]; // output -> 55
// const result = sumOfNestedList(givenArray);
// console.log("sumOfNestedList: ", result);
