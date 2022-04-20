ch_title = "16: If Statements & Comparison Operators"

// define elements
const chapter = document.querySelector('h2');
chapter.innerHTML = ch_title;

/* --------------------------- */

const id = 100;

// // EQUAL TO
// if (id == 100) {
//   console.log('CORRECT')
// } else {
//   console.log('INCORRECT')
// }

// // NOT EQUAL TO
// if (id != 101) {
//   console.log('CORRECT')
// } else {
//   console.log('INCORRECT')
// }

// /* TIP: Test value and Type with === */

// // EQUAL TO VALUE & TYPE
// if (id === 100) {
//   console.log('CORRECT')
// } else {
//   console.log('INCORRECT')
// }

// // EQUAL TO VALUE & TYPE
// if (id !== 100) {
//   console.log('CORRECT')
// } else {
//   console.log('INCORRECT')
// }


// /* Check if variable exists or not (undef) */
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`)
// } else {
//   console.log('NO ID')
// }

// GREATER OR LESS THAN
// if (id > 200) {
//   console.log('CORRECT')
// } else {
//   console.log('INCORRECT')
// }

// IF ELSE
const color = 'Yellow';

// if (color === 'red') {
//   console.log('Color is red')
// } else if (color === 'blue') {
//   console.log('Color is blue')
// } else {
//   console.log('Color is not red/blue')
// }

// LOGICAL OPERATORS

const name = 'Steve';
const age = 15;

// AND &&
if (age > 0 && age < 12 ) {
  console.log(`${name} is a child`)
} else if (age >= 13 && age <=19) {
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is an adult`)
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`)
} else {
  console.log(`${name} is registered for the race`)
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT')

// WITHOUT BRACES
// Works, but not best practice
if (id === 100)
  console.log('CORRECT')
else
  console.log('INCORRECT')