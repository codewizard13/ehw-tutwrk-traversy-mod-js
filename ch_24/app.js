// 24. DOM Selectors For Single Elements

// jQuery just adds bloat to your application THESE DAYS, but is good for quick plugins; not recommended for DOM manipulation because vanilla JS handles most of the same stuff since ES6

// Vanilla JavaScript has two selector types:
// - single element slectors: grab one element by id or class or whatever and only stores one thing. Will just grab the first one
// multiple element selectors: get all elements and store as HTML collection

// document.getElementById()

// console.log(document.getElementById('task-title'))
// console.log(document.getElementById('task-title')[0])
// console.log(document.getElementById('task-title').innerHTML)

// console.log(document.getElementById('task-title'))

// // Get things from the element
// console.log(document.getElementById('task-title').id) // task-title
// console.log(document.getElementById('task-title').className) // task-title

// // Define element for greater
// const taskTitle = document.getElementById('task-title')

// // Change Styling
// // Note: Don't use this just for styling, this is best for use with events

// taskTitle.style.background = "#333"
// taskTitle.style.color = "white"
// taskTitle.style.padding = "5px"
// // taskTitle.style.display = "none"

// // Change Content
// taskTitle.textContent = 'Task List'
// taskTitle.innerText = 'My Tasks'
// taskTitle.innerHTML = '<span style="color:red">Task List</span>'

// document.querySelector() -- Newer and more powerful because can be used with ANY CSS selector

console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))

document.querySelector('li').style.color = 'red'
document.querySelector('ul li').style.color = 'blue'

document.querySelector('li:last-child').style.color = 'red'
document.querySelector('li:nth-child(3)').style.color = 'yellow'
document.querySelector('li:nth-child(4)').textContent = 'Hello World'
document.querySelector('li:nth-child(odd)').style.background = '#ccc'
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'

