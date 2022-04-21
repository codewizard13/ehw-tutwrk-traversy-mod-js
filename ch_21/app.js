sec_num = 2
ch_title = "21. Block Scope With let & const"

// define elements
const chapter = document.querySelector('h2');
chapter.innerHTML = ch_title;

const sec_el = document.querySelector('h1 > span');
sec_el.innerHTML = sec_num

/* --------------------------- */

// Global Scope
var a = 1
let b = 2
const c = 3

// function test() {
//   var a = 4
//   let b = 5
//   const c = 6
//   console.log('Function Scope: ', a, b, c)

// }

// test()

// if (true) {
//   // Block Scope (anything that runs in curly braces)
//   var a = 4
//   let b = 5
//   const c = 6  
//   console.log('If Scope: ', a, b, c)
// }

// Var is weird and causes confusion and security risks

// for (let a = 0; a < 10; a++) { // let works
for (var a = 0; a < 10; a++) { // var changes the value of global a from withing block scope
  console.log(`Loop: ${a}`)
}

// Let and const have a block level scope and var has function scope

console.log('Global Scope: ', a, b, c)