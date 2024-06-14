document.getElementById("add-button").addEventListener("click", function () {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    addTodoItem(todoText);
    todoInput.value = "";
    todoInput.focus();
  }
});

function addTodoItem(text) {
  const todoList = document.getElementById("todo-list");

  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });

  const span = document.createElement("span");
  span.textContent = text;

  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  const editButton = document.createElement("button");
  editButton.className = "edit-btn";
  editButton.innerHTML = "&#9998;";
  editButton.addEventListener("click", function () {
    const newText = prompt("Edit task:", text);
    if (newText !== null) {
      span.textContent = newText;
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.innerHTML = "&#10006;";
  deleteButton.addEventListener("click", function () {
    todoList.removeChild(listItem);
  });

  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);

  listItem.appendChild(checkbox);
  listItem.appendChild(span);
  listItem.appendChild(actionsDiv);

  todoList.appendChild(listItem);
}
