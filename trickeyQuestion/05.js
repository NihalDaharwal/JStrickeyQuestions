let c = { name: "nihal" };
let d;

d = c;
c.name = "anil";
console.log(d.name); //nihal

//coz of same memory refrence
