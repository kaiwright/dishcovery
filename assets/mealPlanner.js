// Calendar
document.addEventListener('DOMContentLoaded', function () {
    renderCalendar();
});

var currentDate = new Date();

function renderCalendar() {
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    console.log(currentDate);

    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById('monthYear').innerText = monthNames[currentMonth] + ' ' + currentYear;

    var calendarTable = document.getElementById('calendar');
    calendarTable.innerHTML = '';

    // Create header row with day names
    var headerRow = calendarTable.insertRow();
    for (var i = 0; i < 7; i++) {
        var cell = headerRow.insertCell();
        cell.innerText = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][i];
    }

    // Get the first day of the month and the number of days in the month
    var firstDay = new Date(currentYear, currentMonth, 1).getDay();
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    var actualDate = new Date();

    console.log(actualDate);

    // Create calendar cells
    var dayCounter = 1;
    for (var i = 0; i < 6; i++) {
        var row = calendarTable.insertRow();

        for (var j = 0; j < 7; j++) {
            var cell = row.insertCell();

            if (i === 0 && j < firstDay) {
                // Empty cells before the first day of the month
                cell.innerText = '';
            } else if (dayCounter <= daysInMonth) {
                // Fill in the days of the month
                cell.innerText = dayCounter;
                console.log(actualDate.getMonth());
                // Highlight the current day only if it's in the current month
                if (currentYear === actualDate.getFullYear() && currentMonth === actualDate.getMonth() && dayCounter === actualDate.getDate()) {
                    cell.classList.add('highlight');
                }

                dayCounter++;
            }
        }
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

// API 
