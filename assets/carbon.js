// var ingredient = "sausage";

// const apiUrl = 'https://foodprint.p.rapidapi.com/api/foodprint/name/' + ingredient;
// const apiKey = '1c4afffc43msh4ac4d4172e66909p19420djsn20f0709231cc';

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://foodprint.p.rapidapi.com/api/foodprint/name/' + ingredient,
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1c4afffc43msh4ac4d4172e66909p19420djsn20f0709231cc',
// 		'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// fetch(apiUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     })

// fetch(apiUrl, {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': apiKey,
//         'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
//     }
// })
//     .then(response => response.json())
//     .then(data => {;
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


// var ingredients = ['ingredient1', 'ingredient2', 'ingredient3'];

// async function processIngredients() {
//     for (let i = 0; i < ingredients.length; i++) {
//         await callSecondApi(ingredients[i]);
//     }
// }

// async function callSecondApi(ingredient) {
//     let carbonData;

//     var response = await fetch(apiUrl + ingredient, {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': apiKey,
//             'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
//         }
//     });

//     if (response.ok) {
//         console.log(response);
//         var data = await response.json();
//         console.log(data);
//         carbonData = data;
//     } else {
//         alert('Error: ' + response.statusText);
//     }

//     return carbonData;
// }

// // Call the function to process ingredients
// processIngredients();