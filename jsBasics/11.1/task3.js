async function getTodo() {
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error ("Error: ", error);
    }
}

getTodo();

async function getUsers() {
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) throw new Error ("Network error");
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.error ("Error: ", error);
    }
}

getUsers();

