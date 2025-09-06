console.log("connected");
const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};

// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// }{

const displayTodo = (todos) => {
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `<div class="todo-card">
        <h3>${todo.title}</h3>
        <p>User ID: ${todo.userId}</p>
        <p>Completed: ${
          todo.completed == true
            ? '<i class="fa-solid fa-square-check"></i>'
            : '<i class="fa-regular fa-circle-xmark"></i>'
        }</p>
        </div>`;
    todoContainer.append(todoCard);
  });
};

loadData();
