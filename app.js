document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const clearBtn = document.getElementById("clear-all");

  // Load saved tasks from localStorage
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Show saved tasks on load
  todos.forEach(addTodoToList);

  // Add new task
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const task = input.value.trim();

    if (task) {
      todos.push(task);
      saveTodos();
      addTodoToList(task);
      input.value = "";
    } else {
      alert("Please enter a task.");
    }
  });

  // Add a task item to the list
  function addTodoToList(text) {
    const li = document.createElement("li");
    li.textContent = text;

    // Create delete ("Done") button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Done";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", function () {
      li.remove();
      todos = todos.filter((t) => t !== text);
      saveTodos();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  }

  // Save tasks to localStorage
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Clear all tasks
  clearBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all tasks?")) {
      todos = [];
      saveTodos();
      list.innerHTML = "";
    }
  });
});
