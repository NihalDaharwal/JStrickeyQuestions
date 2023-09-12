const obj = { 1: "a", 2: "b", hello: "c" };

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);

console.log(obj.hasOwnProperty("1")); //true
console.log("value", obj.hasOwnProperty(1)); //true

console.log(obj.hasOwnProperty("hello")); //true
console.log(obj.hasOwnProperty(hello)); // reference error // hello is not defined
