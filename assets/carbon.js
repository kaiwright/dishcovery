
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

    
