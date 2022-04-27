sec_num = 2
ch_title = "18. Function Declarations & Expressions"

// define elements
const chapter = document.querySelector('h2');
chapter.innerHTML = ch_title;

const sec_el = document.querySelector('h1 > span');
sec_el.innerHTML = sec_num

/* --------------------------- */

// Functions: Blocks of code that can be defined and then called later

// FUNCTION DECLARATIONS

function greet (firstName = 'John', lastName = 'Doe') {
  // ES5
  // if (typeof firstName === 'undefined') { firstName = 'John'}
  // if (typeof lastName === 'undefined') { lastName = 'Doe'}
  
  // console.log('Hello')
  return 'Hello  ' + firstName + ' ' + lastName
}

// console.log(greet())

// FUNCTION EXPRESSIONS

const square = function(x = 3) {
  return x * x
};

// console.log(square())

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS (IIFEs)
// - A function you declare and run at the same time

// (function(){
//   console.log('IIFE Ran...')
// })()

// - IIFEs are useful with the module pattern
// (function(name){
//   console.log('Hello ' + name)
// })('Brad')

// PROPERTY METHODS

const todo = {
  add: function(){
    console.log('Add todo..')
  },
  edit: function(id){
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function(){
  console.log('Delete todo ...')
}

todo.add()
todo.edit(22)
todo.delete()