const currentDayEl = document.querySelector('#currentDay');
const saveBtnEl = document.querySelectorAll('.saveBtn');
const timeBlockEl = document.querySelectorAll('.time-block');
const currentTime = moment().format('H');
currentTime = parseInt(currentTime);

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