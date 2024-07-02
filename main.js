const currentDay = document.getElementById('day');

const timeInMilli = document.getElementById('time');

// Function to display current Day of the week
const displayCurrentDayOfWeek = () => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  currentDay.textContent = `${dayOfWeek}`;
};

// Function to display Current time in Milliseconds
const displayTimeinMilli = () => {
  const currentDate = new Date();
  const currentDateInMilli = currentDate.getTime();

  // Format the millisecond count with commas as thousands separators
  const formattedTimeInMilli = currentDateInMilli.toLocaleString();

  timeInMilli.textContent = formattedTimeInMilli;
};

setInterval(displayTimeinMilli, 1000);
displayCurrentDayOfWeek();
