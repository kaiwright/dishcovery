var queryURL = "https://api.edamam.com/api/recipes/v2?type=public&q=" + ingredient + "&app_id=2e4c3f7b&app_key=9937b42f06b25b17a8890d5216e8728a";
var EaternityURL = "https://co2.eaternity.ch/api/recipes/id?indicators=true"

var ingredient = "eggplant";
console.log(queryURL)
console.log(ingredient)



var apiUrl = 'https://foodprint.p.rapidapi.com/api/foodprint/footprint/0.9';
var apiKey = '6e625eaa59mshe756c05db8e818ap1218e4jsn938c80f4c954';

fetch(apiUrl, {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });



    

    
    
