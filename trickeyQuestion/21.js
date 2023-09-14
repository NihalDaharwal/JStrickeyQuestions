const person = { name: "link" };

function hello(age) {
  return `${this.name} is ${age}`;
}

console.log(hello.call(person, 21));
console.log(hello.bind(person, 21));
console.log(hello.bind(person, 21)()); // after agin we have to call
