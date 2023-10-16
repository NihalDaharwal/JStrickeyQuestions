array = [1, 2, 5, 6, 67, 7]; //1:hello  // known as alias

// const [hello, hello1] = array;
const [hello, hello1, , , , hellor] = array;

// console.log(hello1, hellor);

object = {
  prop1: "22",
  prop2: 3,
  prop3: 3,
  prop4: {
    value: "data",
  },
};

const {
  prop1,
  prop2,
  prop3,
  prop4: { value: propsValue },
} = object;

console.log(prop1);
console.log(prop2);
console.log(prop3);
console.log(propsValue);
