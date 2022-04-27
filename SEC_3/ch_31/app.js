// 31. Keyboard & Input Events

const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')
const select = document.querySelector('select')

// Clear input
taskInput.value = ""

// form.addEventListener('submit', runEvent)

// Keydown
// taskInput.addEventListener('keydown', runEvent)

// Keyup
// taskInput.addEventListener('keyup', runEvent)

// Keypress
// taskInput.addEventListener('keypress', runEvent)

// Keypress
// taskInput.addEventListener('focus', runEvent)

// Blur - oposite of focus
// taskInput.addEventListener('blur', runEvent)

// Cut (as in cut and paste)
// taskInput.addEventListener('cut', runEvent)

// Paste
// taskInput.addEventListener('paste', runEvent)

// Input - Any action in a input field (cut, paste, keydown, keyup, focus, blur, etc.)
// taskInput.addEventListener('input', runEvent)

// GOTCHA: With Materialize you won't see the select list because of how it works, so just
// disable the materialize script in index.html temporarily

// Change
select.addEventListener('change', runEvent)


function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`)

  console.log(e.target.value) // logs everything we type
  heading.innerText = e.target.value // everything you type is displayed in the h5 element

  // Get input value
  // console.log(taskInput.value)

  // e.preventDefault()
}