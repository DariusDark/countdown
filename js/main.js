const sideOpener = document.getElementById('sideOpener'),
    sideCloser = document.getElementById('sideCloser'),
    setHours = document.getElementById('setHours'),
    setMinutes = document.getElementById('setMinutes'),
    setSeconds = document.getElementById('setSeconds'),
    setTimer = document.getElementById('setTimer'),
    hoursRemain = document.getElementById('hoursRemain'),
    minutesRemain = document.getElementById('minutesRemain'),
    secondsRemain = document.getElementById('secondsRemain'),
    startTimer = document.getElementById('startTimer');

let isTimerActive = false;
let currHours = +hoursRemain.textContent;
let currMinutes = +minutesRemain.textContent;
let currSeconds = +secondsRemain.textContent;



setInterval(() => {
    if (isTimerActive) {
        counter();
    }
}, 1000);

function counter(bool) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let gap = currHours * hour + currMinutes * minute + currSeconds * second;

    if (gap !== 0) {
        if(bool !== 'set') {
            gap = gap - 1000;
        }
        hoursRemain.textContent = currHours = Math.floor((gap % day) / hour);
        minutesRemain.textContent = currMinutes = Math.floor((gap % hour) / minute);
        secondsRemain.textContent = currSeconds = Math.floor((gap % minute) / second);
    } else {
        isTimerActive = false;
        startTimer.textContent = 'Start';
        startTimer.classList.remove('active');
    }

};

startTimer.addEventListener('click', function () {

    if (this.classList.contains('active')) {
        isTimerActive = false;
        this.textContent = 'Start';
    } else {
        isTimerActive = true;
        this.textContent = 'Stop';
    }
    this.classList.toggle('active');
});

setTimer.addEventListener('click', function () {

    if (setHours.value !== '' || setMinutes.value !== '' || setSeconds.value !== '') {
        currHours = +setHours.value ? setHours.value : '0';
        currMinutes = +setMinutes.value ? setMinutes.value : '0';
        currSeconds = +setSeconds.value ? setSeconds.value : '0';

        hoursRemain.textContent = currHours;
        minutesRemain.textContent = currMinutes;
        secondsRemain.textContent = currSeconds;

        setHours.value = '';
        setMinutes.value = '';
        setSeconds.value = '';
        counter('set');
    }
});

sideOpener.addEventListener('click', function () {
    this.classList.add('active');
    sideCloser.classList.add('active');
});

sideCloser.addEventListener('click', function () {
    this.classList.remove('active')
    sideOpener.classList.remove('active');
})