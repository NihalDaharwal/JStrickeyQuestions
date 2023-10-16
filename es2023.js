const languages = ["JavaScript", "TypeScript", "CoffeeScript"];
const sorted = languages.toSorted();
console.log(sorted);
// => [ 'CoffeeScript', 'JavaScript', 'TypeScript' ]
console.log(languages);
// => [ 'JavaScript', 'TypeScript', 'CoffeeScript' ]

const numbers = [5, 3, 10, 7, 1];
const sorted1 = numbers.toSorted();
console.log(sorted1);
// => [ 1, 10, 3, 5, 7 ]
const sortedCorrectly = numbers.toSorted((a, b) => a - b);
console.log(sortedCorrectly);
// => [ 1, 3, 5, 7, 10 ]

const strings = ["abc", "äbc", "def"];
const sorted2 = strings.toSorted();
console.log(sorted2);
// => [ 'abc', 'def', 'äbc' ]
const sortedCorrectly2 = strings.toSorted((a, b) => a.localeCompare(b));
console.log(sortedCorrectly);
// => [ 'abc', 'äbc', 'def' ]

//............//

const languages2 = ["JavaScript", "TypeScript", "CoffeeScript"];
const reversed = languages2.toReversed();
console.log(reversed);
// => [ 'CoffeeScript', 'TypeScript', 'JavaScript' ]

//......//

const languages3 = ["JavaScript", "TypeScript", "CoffeeScript"];
const spliced = languages3.toSpliced(2, 1, "Dart", "WebAssembly");
console.log(spliced);
// => [ 'JavaScript', 'TypeScript', 'Dart', 'WebAssembly' ]

const languages4 = ["JavaScript", "TypeScript", "CoffeeScript"];
const startDeletingAt = 2;
const deleteCount = 1;
const spliced4 = languages.toSpliced(
  startDeletingAt,
  deleteCount,
  "Dart",
  "WebAssembly"
);
const removed = languages.slice(startDeletingAt, startDeletingAt + deleteCount);
console.log(spliced4);
// => [ 'JavaScript', 'TypeScript', 'Dart', 'WebAssembly' ]
console.log(removed);
// => [ 'CoffeeScript' ]


//...../


const languages5 = ["JavaScript", "TypeScript", "CoffeeScript"];
languages[2] = "WebAssembly";
console.log(languages5);
// => [ 'JavaScript', 'TypeScript', 'WebAssembly' ]