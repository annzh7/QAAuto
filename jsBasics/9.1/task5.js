const users  = [
  { name: "John", email: "bla@gmail.com", age: 30 },
  { name: "Jake", email: "blabla@gmail.com", age: 25 },
  { name: "Mike", email: "blablabla@gmail.com", age: 40 }
];

for (const { name, email, age } of users) {
    console.log(`${name} is ${age} years old and his email is ${email}.`);
};