sec_num = 2
ch_title = "20. A Look At The Window Object"

// define elements
const chapter = document.querySelector('h2');
chapter.innerHTML = ch_title;

const sec_el = document.querySelector('h1 > span');
sec_el.innerHTML = sec_num

/* --------------------------- */

// - Document object is PART of the Window object
// - NodeJS is a JS runtime that runs as standalone process on your computer; your system is the environment.
// - In client-side JS, the browser is your environment
// - Fetch API makes HTTP requests

// 2022-04-21


// WINDOW METHODS / OBJECTS / PROPERTIES

// window.console.log(123)

console.log(123)

// Alert
// alert('Hello World')

// Prompt - Like alert, but takes INPUT
// const input = prompt();
// console.log(input)

// Confirm - to ensure delete wasn't clicked by accident
// if (confirm('Are you sure?')) {
//   console.log('YES')
// } else {
//   console.log('NO')
// }

let val;

// Outer height and width
// - Can create an event that constantly reports the changing size
// - Outer = from outer edges
// - Inner = from inside the scrollbars
val = window.outerHeight
val = window.outerWidth

// Inner height and width
val = window.innerHeight
val = window.innerWidth

// Scroll points
val = window.scrollY
val = window.scrollX

// Location Object

val = window.location
val = window.location.hostname
val = window.location.port
val = window.location.href
val = window.location.search // ?id=1&name=bob&method=get

// Redirect
// window.location.href = 'https://erichepperle.com'
// Reload
// window.location.reload() // use in a function so doesn't keep reloading

// History Object
// - get browsing history

// - go(): bring us back to any of the sites we browsed previously
// -  
// window.history.go(-14)
// console.log(history.go(-2))

// Navigator Object
// - Pertains to the browser, not the window
// - AppName is always "Netscape", unless "IE"
// - geolocation, userAgent, storageManager, vendor, platform (OS)
// - OS: win32 or Darwin
val = window.navigator
val = window.navigator.appName
val = window.navigator.appVersion
val = window.navigator.userAgent
val = window.navigator.platform
val = window.navigator.vendor
val = window.navigator.language

console.log(val)
