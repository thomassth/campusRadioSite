function getTimeRemaining(endtime) {
var t = Date.parse(endtime) - Date.parse(new Date());
var seconds = Math.floor((t / 1000) % 60);
var minutes = Math.floor((t / 1000 / 60) % 60);
var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
var days = Math.floor(t / (1000 * 60 * 60 * 24));
return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
};
}

function initializeClock(id, endtime) {
var clock = document.getElementById(id);
var daysSpan = clock.querySelector('.days');
var hoursSpan = clock.querySelector('.hours');
var minutesSpan = clock.querySelector('.minutes');
var secondsSpan = clock.querySelector('.seconds');

function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
    daysSpan.innerHTML = 0;
    hoursSpan.innerHTML = 00;
    minutesSpan.innerHTML = 00;
    secondsSpan.innerHTML = 00;
    }
}

updateClock();
var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.UTC(2016, 8, 23, 16, 0, 0));
initializeClock('clockdiv', deadline);

var count = Date.parse(new Date(Date.UTC(2016, 8, 26, 10, 0, 0))) - Date.parse(new Date());

var counter = setInterval(timer, 10); //10 will  run it every 100th of a second

function timer()
{
    if (count <= 0)
    {
        clearInterval(counter);
        return;
    }
    count--;
    document.getElementById("timer").innerHTML=('0' + count%100).slice(-2); 
}

function flashtext(ele,col) {
    var tmpColCheck = document.getElementById( ele ).style.color;

      if (tmpColCheck === 'yellow') {
        document.getElementById( ele ).style.color = col;
      } else {
        document.getElementById( ele ).style.color = 'yellow';
      }
    } 

    setInterval(function() {
        flashtext('clockdiv','red');
    }, 500 ); //set an interval timer up to repeat the function