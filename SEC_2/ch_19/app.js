sec_num = 2
ch_title = "19. General Loops"

// define elements
const chapter = document.querySelector('h2');
chapter.innerHTML = ch_title;

const sec_el = document.querySelector('h1 > span');
sec_el.innerHTML = sec_num

/* --------------------------- */

// FOR LOOP

// for (let i = 0; i < 10; i++) {
//   // console.log('Number ' +i)
//   if (i === 2){
//     console.info('2 is my fav num')
//     continue; // continue to the next iteration, don't do anything else this round
//   }

//   if (i===5){
//     console.log('Stopped the loop with break on num ' + i)
//     break;
//   }

//   console.log('Number ' +i)
// }

// WHILE LOOP

// let i = 0

// while (i < 10) {
//   console.log('Number ' + i)
//   i++
// }

// DO WHILE
// - Always runs once no matter what

// let i = 100;

// do {
//   console.log('Number ' + i)
//   i++;
// }

// while(i < 10)

// LOP THROUGH ARRAY

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i])
// }

// FOREACH

// cars.forEach(function(car, index, array){
//   console.log(`${index}: ${car}`)
//   console.log(array)
// })

// MAP
// const users = [
//   {id:1, name:'John'},
//   {id:2, name: 'Sara'},
//   {id:3, name: 'Karen'},
//   {id:457, name: 'Steve'}
// ]

// const ids = users.map(function(user){
//   return user.id
// })

// console.log(ids)

// FOR IN
// - Often used for objects

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let x in user) {
  // console.log(x) // keys
  console.log(`${x}: ${user[x]}`)
}