let currentDayEl = document.querySelector('#currentDay');
let saveBtnEl = document.querySelectorAll('.saveBtn');
let timeBlockEl = document.querySelectorAll('.time-block');
let currentTime = moment().format('H');
currentTime = parseInt(currentTime);

$(document).ready(function () {
  renderText();
});


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

// display current day at top of the browser



  $("#currentDay").text(moment().format('LLLL'));
    



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

  // when "save" button is clicked, it saves to local storage
  
  // $('.btn9').on('click', function () {
  //   var taskContent = $('.hour9').val();
  //   localStorage.setItem('9:00 AM', taskContent);
  // });
  // $('.hour9').val(localStorage.getItem('9:00 AM'));
  
  // $('.btn10').on('click', function () {
  //   var taskContent = $('.hr10').val();
  //   localStorage.setItem('10:00 AM', taskContent);
  // });
  // $('.hr10').val(localStorage.getItem('10:00 AM'));
  
  // $('.btn11').on('click', function () {
  //   var taskContent = $('.hr11').val();
  //   localStorage.setItem('11:00 AM', taskContent);
  // });
  // $('.hr11').val(localStorage.getItem('11:00 AM'));
  
  // $('.btn12').on('click', function () {
  //   var taskContent = $('.hr12 PM').val();
  //   localStorage.setItem('12:00 PM', taskContent);
  // });
  // $('.hr12').val(localStorage.getItem('12:00 PM'));
  
  // $('.btn1').on('click', function () {
  //   var taskContent = $('.hr1').val();
  //   localStorage.setItem('1:00 PM', taskContent);
  // });
  // $('.hr1').val(localStorage.getItem('1:00 PM'));
  
  // $('.btn2').on('click', function () {
  //   var taskContent = $('.hr2').val();
  //   localStorage.setItem('2:00 PM', taskContent);
  // });
  // $('.hr2').val(localStorage.getItem('2:00 PM'));
  
  // $('.btn3').on('click', function () {
  //   var taskContent = $('.hr3').val();
  //   localStorage.setItem('3:00 PM', taskContent);
  // });
  // $('.hr3').val(localStorage.getItem('3:00 PM'));
  
  // $('.btn4').on('click', function () {
  //   var taskContent = $('.hr4').val();
  //   localStorage.setItem('4:00 PM', taskContent);
  // });
  // $('.hr4').val(localStorage.getItem('4:00 PM'));
  
  // $('.btn5').on('click', function () {
  //   var taskContent = $('.hr5').val();
  //   localStorage.setItem('5:00 PM', taskContent);
  // });
  // $('.hr5').val(localStorage.getItem('5:00 PM'));
  let eventText;
  let eventTime;
  
  $(".saveBtn").click(function() {
    console.log('test')
    eventText = $(this).siblings('.time-block').val();
      eventTime = $(this).siblings(".hour").text().trim();
      window.localStorage.setItem(eventTime, JSON.stringify(eventText));
  
      renderText ();
      
  
  });




  function renderText () {
    

    let saveText9 = localStorage.getItem("9:00AM");
    
    $('.hr9').val(saveText9);

    let saveText10 = localStorage.getItem("10:00AM");
    
    $('.hr10').val(saveText10);

    let saveText11 = localStorage.getItem("11:00AM");
    
    $('.hr11').val(saveText11);

    let saveText12 = localStorage.getItem("12:00PM");
    
    $('.hr12').val(saveText12);

    let saveText1 = localStorage.getItem("1:00PM");
    
    $('.hr1').val(saveText1);

    let saveText2 = localStorage.getItem("2:00PM");
    
    $('.hr2').val(saveText2);

    let saveText3 = localStorage.getItem("3:00PM");
    
    $('.hr3').val(saveText3);

    let saveText4 = localStorage.getItem("4:00PM");
    
    $('.hr4').val(saveText4);

    let saveText5 = localStorage.getItem("5:00PM");
    
    $('.hr5').val(saveText5);

  

};


setColor();