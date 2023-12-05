
var shoppingList = ["Carrots", "Peas", "Tofu"]
recipeNames = []
co2Data = []


function fetchData() {
    var queryURL = "https://api.edamam.com/api/recipes/v2?type=public&q=" + shoppingList + "&app_id=2e4c3f7b&app_key=9937b42f06b25b17a8890d5216e8728a";
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 1; i < (data.hits).length; i++) {
                recipeNames.push(data.hits[i].recipe.label)
                co2Data.push(Math.round(data.hits[i].recipe.totalCO2Emissions));
            }
            console.log(recipeNames, co2Data)
            // chart
            function createChart() {

                const ctx = document.getElementById('myChart');

                new Chart(ctx, {
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


