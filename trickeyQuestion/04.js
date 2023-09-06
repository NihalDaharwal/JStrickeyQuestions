let data = "size";

const bird = {
  size: "small",
  size2: "small2",
};

console.log(bird[data]); // small
console.log(bird["size"]); // small
console.log(bird.size); // small

console.log(bird["data"]); // undefined
console.log(bird.data); // undefined

console.log(bird); //{ size: 'small', size2: 'small2' }

// small
// small
// small

// undefined
// undefined
// { size: 'small', size2: 'small2' }
