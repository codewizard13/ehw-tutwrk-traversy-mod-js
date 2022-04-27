// 33. Local & Session Storage

// GOTCHA: localstorage needs to be saved as a string, so if array then use JSON.stringify()

// Diff between local storage and session storage = local storage will persist until you manually clear it out, where session storage clears automatically once the browser is closed

// Local storage can be inspected under Application > Storage > Localstorage then click the http://127 ...


// Set local storage item
// localStorage.setItem('name', 'John')
// localStorage.setItem('age', 30)
// Set session storage item
// sessionStorage.setItem('name', 'Beth')

// Remove from local storage
// localStorage.removeItem('name')

// Get from local storage
// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')

// // Clear local storage
// localStorage.clear()

// console.log(`${name} is ${age} years old`)


document.querySelector('form').addEventListener('submit', function(e){

  // GOTCHA: The submit button won't display anything unless you type in the input field
  const task = document.getElementById('task').value
  // console.log(task)

  // Create array of tasks and store as string
  let tasks

  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks)) // GOTCHA: can only store one task at a time
  
  alert('Task saved')

  e.preventDefault()
})

const tasks = JSON.parse(localStorage.getItem('tasks'))

tasks.forEach(function(task){
  console.log(task)
})