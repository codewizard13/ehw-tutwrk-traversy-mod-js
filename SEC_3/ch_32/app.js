// 32. Event Bubbling & Delegation

// - Event delegation is almost the opposite of bubbling

// Event Bubbling

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title')
// })

// // card title's parent:
// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content')
// })

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card')
// })

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('co l')
// })


// Event Delegation

// - GOTCHA: You need to use event delgation if you dynamically insert something into the DOM through JavaScript after the page is loaded

// const delItem = document.querySelector('.delete-item')

// delItem.addEventListener('click', deleteItem)

document.body.addEventListener('click', deleteItem)

function deleteItem(e){

  // if (e.target.parentElement.className === 'delete-item'){
  //   console.log('delete item')
  // }

  if (e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item')

    e.target.parentElement.parentElement.remove() // removes 'li' grandparent element

  }



}
