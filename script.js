let currentDayEl = document.querySelector('#currentDay');
let saveBtnEl = document.querySelectorAll('.saveBtn');
let timeBlockEl = document.querySelectorAll('.time-block');
let currentTime = moment().format('H');
currentTime = parseInt(currentTime);


// changes the hour time slot into current hour

let hour9Am = document.querySelector('.hour9').textContent;
hour9Am = parseInt(hour9Am[0]);

let hour10Am = document.querySelector('.hour10').textContent;
hour10Am = parseInt(hour10Am[1]) + 10;

let hour11Am = document.querySelector('.hour11').textContent;
hour11Am = parseInt(hour11Am[1]) + 10;

let hour12Pm = document.querySelector('.hour12').textContent;
hour12Pm = parseInt(hour12Pm[1]) + 10;

let hour1Pm = document.querySelector('.hour1').textContent;
hour1Pm = parseInt(hour1Pm[0]) + 12;

let hour2Pm = document.querySelector('.hour2').textContent;
hour2Pm = parseInt(hour2Pm[0]) + 12;

let hour3Pm = document.querySelector('.hour3').textContent;
hour3Pm = parseInt(hour3Pm[0]) + 12;

let hour4Pm = document.querySelector('.hour4').textContent;
hour4Pm = parseInt(hour4Pm[0]) + 12;

let hour5Pm = document.querySelector('.hour5').textContent;
hour5Pm = parseInt(hour5Pm[0]) + 12;

var hours = [hour9Am, hour10Am, hour11Am, hour12Pm, hour1Pm, hour2Pm, hour3Pm, hour4Pm, hour5Pm];
var articleArr = [
  { text9am: '.hour9' },
  { text10am: '.hour10' },
  { text11am: '.hour11' },
  { text12Pm: '.hour12' },
  { text1Pm: '.hour1' },
  { text2Pm: '.hour2' },
  { text3Pm: '.hour3' },
  { text4Pm: '.hour4' },
  { text5Pm: '.hour5' },
];


function setColor() {
    for (var i = 0; i < hours.length; i++) {
      if (currentTime < hours[i]) {
        timeBlockEl[i].classList.add('future');
      } else if (currentTime === hours[i]) {
        timeBlockEl[i].classList.add('present');
      } else {
        timeBlockEl[i].classList.add('past');
      }
    }
  }

// dateDisplay();
setColor();