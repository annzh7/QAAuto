//2.1.1
function getTodo() {
    return fetch ("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
        console.log('ToDo:', data);
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

getTodo();

//2.2.1
function getUsers() {
    return fetch ("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(user => {
        console.log('User:', user);
        return user;
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

getUsers();

//2.2.2
const promisesCollection1 = Promise.all([getTodo(), getUsers()]);
promisesCollection1
    .then (result => console.log("Promise.all result: ", result))
    .catch(error => console.error("Promise.all error: ", error)); 

const promisesCollection2 = Promise.race([getTodo(), getUsers()])
promisesCollection2
    .then(result => console.log("Promise.race result:", result))
    .catch(error => console.error("Promise.race error:", error));