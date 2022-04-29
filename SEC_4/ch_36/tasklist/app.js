// GOTCHA: Materialize needs jQuery as a dependency

// DEFINE UI VARS
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask)
  // Remove task event
  taskList.addEventListener('click', removeTask)
  // Clear task event
  clearBtn.addEventListener('click', clearTasks)
  // Filter tasks event (keyup)
  filter.addEventListener('keyup', filterTasks)
}

// Add task
function addTask(e) {
  if (taskInput.value === "") {
    alert('Add task')
  }

  // Create li element
  const li = document.createElement('li')
  // Add Class
  li.className = 'collection-item'
  // Create text node and append to li (with the value of task input field)
  li.appendChild(document.createTextNode(taskInput.value))
  // Create new delete link element
  const link = document.createElement('a')
  // Add class
  link.className = 'delete-item secondary-content'
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>'
  // Append link to li
  li.appendChild(link)

  // Append li to ul
  taskList.appendChild(li)

  // Store in Local Storage
  storeTaskInLocalStorage(taskInput.value)

  // Clear input
  taskInput.value = ""


  e.preventDefault()
}


// Store Task
function storeTaskInLocalStorage(task) {
  let tasks

  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))

}



// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove()
    }
  }

  console.log(e.target)
}

// Clear Tasks
function clearTasks(e) {
  // taskList.innerHTML = ''  // one way

  // GOTCHA: Looping with a while is actually faster for some reason
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}

// Filter Tasks
function filterTasks(e){
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) != -1 ) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })

  console.log(text)
}