for (var i = 0; i < 3; i++) {
  console.log(i);
}
//0 1 2

for (let i = 0; i < 3; i++) {
  console.log(i);
}
//0 1 2

//-------------------------------------//

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1); // timeout value in second parameter
}
//global scope
// output 3 3 3

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1); // timeout value in second parameter
}
//blocked scope
// 0 1 2
