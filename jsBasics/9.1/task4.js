const person = {
    firstName: 'Anna',
    lastName: 'Zhuravel',
    age: 30
};
console.log (person);

person.email = ('blablabla@gmail.com');
delete person.age;

console.log (person);