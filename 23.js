// const str = "My Name Is Nihal";
// const a = [];
// const b = str.split(" ").reverse();

// console.log(str);

// for (i = 0; i < b.length; i++) {
//   a.push(b[i].split("").reverse().join(""));
// }
// console.log(a);

// const str = "My Name Is Nitin";
// function getReversedExpression(givenString) {
//   const mockArray = givenString.split("");
//   const reverseArray = givenString.split("").reverse();
//   for (let i = 0; i < mockArray.length; i++) {
//     let element = mockArray[i];
//     if (element === " ") {
//       reverseArray.splice(i, 0, element);
//     }
//   }
//   console.log("reversed: ", reverseArray);
// }
// console.log("original: ", str);
// getReversedExpression(str);


// const str = "My Name Is Nitin";

// function getReversedExpression(givenString) {
//   const wordsArray = givenString.split(" ");
//   const reversedWordsArray = wordsArray.map(word => {
//     return word.split("").reverse().join("");
//   });

//   const reversedString = reversedWordsArray.join(" ");
//   console.log("reversed: ", reversedString);
// }

// console.log("original: ", str);
// getReversedExpression(str);


// function to reverse the words
// function reverseWords(str) {
//     return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
//  }
//  console.log(reverseWords('hello tutorials point'));
//  console.log(reverseWords('this is a code'));
//  console.log(reverseWords('  leading  and  trailing  spaces  '));
//  console.log(reverseWords('My Name is Nitin'));

function reverseStringPreserveSpaces(inputString) {
    const characters = inputString.split('');
    const reversedCharacters = inputString.split('').reverse();
  
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] === ' ') {
        reversedCharacters.splice(i, 0, ' ');
      }
    }
  
    return reversedCharacters.join('');
  }
  
  const str = "My Name Is Nitin";
  const reversedStr = reverseStringPreserveSpaces(str);
  
  console.log("original: ", str);
  console.log("reversed: ", reversedStr);
  