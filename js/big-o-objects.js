let person = {
  fristName: "john",
  age: 15,
  friends: ["a", "b", "c"],
};

Object.keys(person); // BigO(n)
Object.entries(person); // BigO(n)
Object.values(person); // BigO(n)
Object.hasOwnProperty("fristName"); //BigO(1)
