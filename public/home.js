const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');
const taskInput = document.querySelector('#task-input');

let tasks = [];

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" data-index="${index}">X</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask(e) {
  e.preventDefault();
  if (taskInput.value.trim()) {
    tasks.push(taskInput.value.trim());
    renderTasks();
    taskInput.value = '';
  }
}

function deleteTask(e) {
  if (e.target.classList.contains('delete-btn')) {
    const index = e.target.dataset.index;
    tasks.splice(index, 1);
    renderTasks();
  }
}

taskForm.addEventListener('submit', addTask);

// Add event listener to the document to handle clicks on the delete button
document.addEventListener('click', deleteTask);