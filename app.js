//
//

// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');

const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');

const taskInput = document.querySelector('#task');

// Call the function to load all event listeners
loadEventListeners();

// Load all event listeners function
function loadEventListeners(params) {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Add task function
function addTask(event) {
  event.preventDefault();

  if (taskInput.value === '') {
    alert('You must enter a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create textnode and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = `<i class="fa fa-remove"></i>`;
  // Append link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);
  // Clear input
  taskInput.value = '';
}

// Remove task
function removeTask(e) {
  e.preventDefault();
  const bozo = e.target.parentElement;
  if (bozo.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      bozo.parentElement.remove();
    }
  }
}

// Clear tasks
function clearTasks() {
  // taskList.innerHTML = '';
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  console.log(text);

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
