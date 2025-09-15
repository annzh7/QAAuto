class TodoService {
    async getTodo(id = 1) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            if (!response.ok) throw new Error("Network error");
            const data = await response.json();
            console.log("Todo:", data);
            return data;
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

class UserService {
    async getUser(id = 1) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) throw new Error("Network error");
            const user = await response.json();
            console.log("User:", user);
            return user;
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

const todoService = new TodoService();
todoService.getTodo(1);

const userService = new UserService();
userService.getUser(2);
