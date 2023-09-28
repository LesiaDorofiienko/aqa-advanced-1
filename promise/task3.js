async function fetchTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  return await response.json();
}
async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
  return await response.json();
}

const promiseAllResult = await Promise.all([fetchTodo(), fetchUser()]);
const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
console.log("Result Promise.race:", raceResult);
console.log("Result Promise.all:", promiseAllResult);
