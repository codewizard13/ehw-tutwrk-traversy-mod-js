// 27. Creating Elements

// Create Element
const li = document.createElement('li')

// Add Class
li.className = 'collection-item'

// Add ID
li.id = 'new-item'

// Add Attribute
li.setAttribute('title', 'New Item')

// Create text node and APPEND (put something inside something)
li.appendChild(document.createTextNode('Hello World'))

// Create ne link element
const link = document.createElement('a')
// Add classes (copy from html)
link.className = 'delete-item secondary-content'
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link)

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li)

console.log(li)