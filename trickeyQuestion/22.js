function hello() {
  return (() => 0)();
}

console.log(typeof hello());

//number

function hello1() {
  return () => 0;
}

console.log(typeof hello1());
//function

function hello2() {
  return 0;
}

console.log(typeof hello2());
//number

//----------------------
function hello3() {
  return () => 0;
}

console.log(hello3());
//()=>0

function hello4() {
  return () => 0;
}

console.log(hello4()());
//0
