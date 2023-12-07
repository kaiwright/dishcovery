
var shoppingList = ["Carrots", "Peas", "Potato"]
recipeNames = []
co2Data = []

// fetches data from the api based on what recipes the user can make
function fetchData() {
    var queryURL = "https://api.edamam.com/api/recipes/v2?type=public&q=" + shoppingList + "&app_id=e804f1af&app_key=468b4894872d9ced66fd0510c4404a26&random=true";
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 1; i < 14; i++) {
                recipeNames.push(data.hits[i].recipe.label)
                co2Data.push(Math.round(data.hits[i].recipe.totalCO2Emissions));
            }
            // chart
            function createChart() {
                const ctx = document.getElementById('myChart');

                const pieChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: recipeNames,
                        datasets: [{
                            data: co2Data,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                            }
                        }
                    },
                });
            }
            createChart()
        })
}

// Changes the chart's location when resized
window.onresize = window.onload = function() {
    if ($(window).width() < 800) {
        $('#co2Chart').appendTo($('#chartArea'))
    } else {
        $('#co2Chart').appendTo($('#rightContent'))
    }
}

