
// Select elements 
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-all');

// Load saved tasks from localStorage 
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Display saved tasks when page loads
window.addEventListener('DOMContentLoaded', () => {
    todos.forEach(task => addTodoToList(task));
});

// Handle form submit 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const task = input.value.trim();

    if (task) {
        todos.push(task);
        saveTodos();
        addTodoToList(task);
        input.value = '';
    } else {
        alert('Please enter a task.');
    }
});

// Add task to list 
function addTodoToList(text) {
    const li = document.createElement('li');
    li.textContent = text;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Done';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
        li.remove();
        todos = todos.filter(t => t !== text);
        saveTodos();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
}

// Save to localStorage 
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Clear all button 
clearBtn.addEventListener('click', function () {
    if (confirm('Are you sure you want to clear all tasks?')) {
        todos = [];
        saveTodos();
        list.innerHTML = '';
    }
});



