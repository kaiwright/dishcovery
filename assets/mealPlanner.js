// Calendar
document.addEventListener('DOMContentLoaded', function () {
    renderCalendar();
});

var currentDate = new Date();

function renderCalendar() {
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
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

document.addEventListener('DOMContentLoaded', function () {
    // Define the number of days in a week
    const numberOfDays = 7;

    // Get the container to append the meal planner
    const mealPlannerContainer = document.getElementById('meal-planner-container');

    // Create meal planner dynamically
    for (let day = 1; day <= numberOfDays; day++) {
        // Create day card
        const dayCard = document.createElement('div');
        dayCard.classList.add('day-card');

        // Set day heading with current day and month
        const today = new Date();
        today.setDate(today.getDate() + day - 1); // Adjust for the current day
        const dayOptions = { weekday: 'long', month: 'long', day: 'numeric' };
        const heading = document.createElement('h3');
        heading.textContent = today.toLocaleDateString('en-US', dayOptions);
        dayCard.appendChild(heading);

        // Create meals for the day
        const meals = ['Breakfast', 'Lunch', 'Dinner'];


        meals.forEach(meal => {
            const mealElement = document.createElement('div');
            mealElement.classList.add('meal');
            mealElement.textContent = meal;
            dayCard.appendChild(mealElement);

            // create buttons attached to the meals
            const recipeBox = document.createElement('a');
            recipeBox.classList.add('recipe', 'btn', meal)
            mealElement.appendChild(recipeBox)

            if (recipeBox.classList.contains('Breakfast')) {
                var breakfastURL = "https://api.edamam.com/api/recipes/v2?type=public&app_id=e804f1af&app_key=468b4894872d9ced66fd0510c4404a26&mealType=Breakfast&random=true";
                fetch(breakfastURL) 
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        recipeBox.textContent = data.hits[0].recipe.label;
                        recipeBox.setAttribute('href', data.hits[0].recipe.url)
                        recipeBox.setAttribute('target', '_blank')
                    });
            } if (recipeBox.classList.contains('Lunch')) {
                // lunch
                var lunchURL = "https://api.edamam.com/api/recipes/v2?type=public&app_id=e804f1af&app_key=468b4894872d9ced66fd0510c4404a26&mealType=Lunch&random=true";
                fetch(lunchURL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        recipeBox.textContent = data.hits[0].recipe.label
                        recipeBox.setAttribute('href', data.hits[0].recipe.url)
                        recipeBox.setAttribute('target', '_blank')
                    });
            } if (recipeBox.classList.contains('Dinner')) {
                // dinner
                var dinnerURL = "https://api.edamam.com/api/recipes/v2?type=public&app_id=e804f1af&app_key=468b4894872d9ced66fd0510c4404a26&mealType=Dinner&random=true";
                fetch(dinnerURL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        recipeBox.textContent = data.hits[0].recipe.label
                        recipeBox.setAttribute('href', data.hits[0].recipe.url)
                        recipeBox.setAttribute('target', '_blank')
                    });
            }

        });
        // Append the day card to the container
        mealPlannerContainer.appendChild(dayCard);
    }

});








