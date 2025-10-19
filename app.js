document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("todo-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const clearBtn = document.getElementById("clear-all");
  const message = document.getElementById("message");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach(addTodoToList);

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

  function addTodoToList(text) {
    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Done";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      li.remove();
      todos = todos.filter((t) => t !== text);
      saveTodos();

      // Call the React quote function
      if (window.showRandomQuote) {
        window.showRandomQuote();
      }
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
  }

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  clearBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all tasks?")) {
      todos = [];
      saveTodos();
      list.innerHTML = "";
      showMessage("All tasks cleared!");
    }
  });

  function showMessage(text, color = "green") {
    message.textContent = text;
    message.style.color = color;
    message.classList.add("show");

    setTimeout(() => message.classList.remove("show"), 2000);
  }
});
