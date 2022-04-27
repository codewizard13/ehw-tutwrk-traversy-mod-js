let val

val = document

// collection: like array but can't use foreach loop
// nodelist: like array but CAN use foreach loop

val = document.all // all top level DOM elements as collection
val = document.all[2]
val = document.all.length // count of top level DOM elements
val = document.head
val = document.body
val = document.doctype
val = document.domain
val = document.URL
val = document.characterSet
val = document.ownerDocument
val = document.contentType

// Select stuff without selectors

val = document.forms
val = document.forms[0]
val = document.forms[0].id
val = document.forms[0].method // also can get action

val = document.links
val = document.links[0]
val = document.links[0].id
val = document.links[0].className
val = document.links[0].classList
val = document.links[0].classList[0]

val = document.images

val = document.scripts
val = document.scripts[2].getAttribute('src')

// val = document.styleSheets

let scripts = document.scripts

let scriptsArr = Array.from(scripts)

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'))
})

console.log(val)