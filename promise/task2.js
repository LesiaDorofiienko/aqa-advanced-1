function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
        (response) => response.json(),
    );
}

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1").then(
        (response) => response.json(),
    );
}

const promiseAllResult = await Promise.all([fetchTodo(), fetchUser()]);
const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
console.log("Result Promise.race:", raceResult);
console.log("Result Promise.all:", promiseAllResult);
