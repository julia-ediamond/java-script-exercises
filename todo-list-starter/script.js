let todoTasksText = ["Walk Chilli", "Make Dinner"];
let todoTasksStatus = [false, true];
let todoList = document.getElementById("todo-list");todoTasksText.forEach((task, index) => {
    let newTodoTaskTextElement = document.createElement("p");newTodoTaskTextElement.innerText = task;
    if (todoTasksStatus[index] == true) {
        newTodoTaskTextElement.classList.add("complete");
}
    let newTodoTaskElement = document.createElement("li");newTodoTaskElement.appendChild(newTodoTaskTextElement);todoList.appendChild(newTodoTaskElement);});

function addTask() {}

function updateTodoList() {}

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {}
