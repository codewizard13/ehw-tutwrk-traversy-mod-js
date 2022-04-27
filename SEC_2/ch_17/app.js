sec_num = 2
ch_title = "17. Switches"

// define elements
const chapter = document.querySelector('h2');
chapter.innerHTML = ch_title;

const sec_el = document.querySelector('h1 > span');
sec_el.innerHTML = sec_num

/* --------------------------- */

const color = 'yellow'

switch (color) {
  case 'red':
    console.log('Color is red')
    break;
  case 'blue':
    console.log('Color is blue')
    break;
  default:
    console.log('Color is not red/blue')
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`)