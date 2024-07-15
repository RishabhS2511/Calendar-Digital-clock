// Calendar script
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();

// Clock script
let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const periodContainer = document.getElementById('period-container');

    if (!is24HourFormat) {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        document.getElementById('period').textContent = period;
        periodContainer.style.display = 'flex';
    } else {
        periodContainer.style.display = 'none';
    }

    hours = String(hours).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    document.getElementById('toggleFormat').textContent = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
    updateClock();
}

document.getElementById('toggleFormat').addEventListener('click', toggleFormat);

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately
