function Car() {
  this.make = "tata";
  return { make: "kia" };
}

const myCar = new Car();
console.log(myCar.make);
