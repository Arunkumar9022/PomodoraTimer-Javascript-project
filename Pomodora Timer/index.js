let timer = document.getElementById('timer');
let maincontainer = document.querySelector('.main-container');
let btnstart = document.getElementById('btn-start');
let message = document.getElementById('info');
let minutes = 24;
let seconds = 60;

message.style.display = "none";

let startPromodoro = () => {
    let interval = setInterval(() => {
        // countDown
        seconds = seconds - 1;

        if (seconds === 0) {
            minutes = minutes - 1;
            seconds = 59;
        }

        // Adding "0" if single value
         seconds = seconds < 10 ? `0${seconds}` : seconds;

        // stop interval
        if (minutes < 0) {
            clearInterval(interval);
            message.style.display = "block";
            message.innerHTML = '5 minutes break';
            maincontainer.style.display = 'none';

            setTimeout(() => {
                location.reload();
            }, 3000);

            minutes = 25;
            seconds = '00';
        }
        timer.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
};

btnstart.addEventListener('click', startPromodoro);