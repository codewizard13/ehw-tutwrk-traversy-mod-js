// 31. Keyboard & Input Events

const form = document.querySelector('form')
const taskInput = document.getElementById('task')

form.addEventListener('submit', runEvent)

function runEvent(e){
  e.preventDefault()

  console.log(`EVENT TYPE: ${e.type}`)
}