const currentDay = document.getElementById('day');
const currentTime = document.getElementById('time');

// Function to display current day of the week
const displayCurrentDayOfWeek = () => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  currentDay.textContent = `Current day is ${dayOfWeek}`;
};

// Function to display current time in a readable format
const displayCurrentTime = () => {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  currentTime.textContent = `Current time is ${hours}:${minutes}:${seconds}`;
};

setInterval(displayCurrentTime, 1000);
displayCurrentDayOfWeek();
