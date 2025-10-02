const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const task = input.value.trim();
    if (task) {
        addTodo(task);
        input.value = '';
    } else {
        alert('Please enter a task.');
    }
});

function addTodo(text) {
    const li = document.createElement('li');
    li.textContent = text;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Done';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
}