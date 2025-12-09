const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const prioritySelect = document.getElementById('prioritySelect');
const clearBtn = document.getElementById('clearBtn');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');
  li.className = `task ${priority}`;

  const span = document.createElement('span');
  span.textContent = `${taskText} (${priority.toUpperCase()})`;
  span.addEventListener('click', () => {
    li.classList.toggle('done');
    taskList.appendChild(li); // move to bottom if done
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', () => {
    li.classList.add('fade-out');
    setTimeout(() => li.remove(), 300);
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = '';
});

clearBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to clear all tasks?")) {
    taskList.innerHTML = '';
  }
});
