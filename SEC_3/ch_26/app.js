// Traverse = move up and down
// - dealing with parents and children of different nodes

let val

const list = document.querySelector('ul.collection') // get ul
const listItem = document.querySelector('li.collection-item:first-child')


val = listItem
val = list


// Get child nodes
val = list.childNodes // returns nodelist
val = list.childNodes[0]
val = list.childNodes[0].nodeName
val = list.childNodes[0].nodeType
val = list.childNodes[3].nodeType

// #GOTCHA: Line breaks count as text nodes

/*
NODE TYPES:

1 - Element
2 - Attribute (deprecated)
3 - Text Node
8 - Comment
9 - Document itself
10 - Doctype

*/

// Get children (ignores text nodes / line breaks)
val = list.children // returns HTML collection
val = list.children[0]
val = list.children[1]
list.children[1].textContent = 'Hello'

// Children of children
list.children[3].children[0].id = 'test-link'
val = list.children[3].children[0]

// First Child
val = list.firstChild
val = list.firstElementChild // no text nodes, just elements

// Last Child
val = list.lastChild
val = list.lastElementChild // no text nodes, just elements

// Count Child Elements
val = list.childElementCount
val = list.length // undefined --> use childElementCount

// Get Parent Node
val = listItem.parentNode
val = listItem.parentElement
val = listItem.parentElement.parentElement // grandparent

// Get Next Sibling
val = listItem.nextSibling
val = listItem.nextElementSibling.nextElementSibling

// Get Previous Sibling
val = listItem.previousSibling
// val = listItem.previousElementSibling

console.log(val)