// GOTCHA: Materialize needs jQuery as a dependency

// DEFINE UI VARS
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

function loadEventListeners(){
  // Add task event
  form.addEventListener('submit', addTask)
}

// Add task
function addTask(e) {
  if (taskInput.value === ""){
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
  link.innerHTML = '<i clas="fa fa-remove"></i>'
  // Append link to li
  li.appendChild(link)

  // Append li to ul
  taskList.appendChild(li)

  // Clear input
  taskInput.value = ""


  e.preventDefault()
}