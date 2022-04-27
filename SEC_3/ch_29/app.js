// 29. Event Listeners & The Event Object

// - e: event
// - in the anchor tag, putting "#" as the href will prevent the default
//   but the more common and probably better approach is the e.preventDefault()
//   which, again, keeps the default event from firing so we can override it
//   with some callback function

// document.querySelector('.clear-tasks').addEventListener('click',
//   function (e) {
//     console.log('Hello World')

//     e.preventDefault()
// })

// Event listener with NAMED FUNCTION

// target: the element the event actually happened on

document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e) {
  // console.log('Clicked')

  let val

  val = e

  // Event target element
  val = e.target
  val = e.target.id
  val = e.target.className
  val = e.target.classList // DOMTokenList

  // e.target.innerText = 'Hello'

  // Event type
  val = e.type

  // Timestamp
  val = e.timeStamp

  // Coordinates event relative to the window
  val = e.clientY
  val = e.clientX

  // Coordinates event relative to the element
  val = e.offsetY
  val = e.offsetX

  console.log(val)


}
