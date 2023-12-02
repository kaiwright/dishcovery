const apiUrl = 'https://foodprint.p.rapidapi.com/api/foodprint';
const apiKey = '1c4afffc43msh4ac4d4172e66909p19420djsn20f0709231cc';

const url = 'https://foodprint.p.rapidapi.com/api/foodprint';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c4afffc43msh4ac4d4172e66909p19420djsn20f0709231cc',
		'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

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


    var  ingredients = ['ingredient1', 'ingredient2', 'ingredient3'];

    async function processIngredients() {
      for (let i = 0; i < ingredients.length; i++) {
        await callSecondApi(ingredients[i]);
      }
    }

    async function callSecondApi(ingredient) {
      let carbonData;

     var response = await fetch(apiUrl + ingredient, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'foodprint.p.rapidapi.com'
        }
      });

      if (response.ok) {
        console.log(response);
     var data = await response.json();
        console.log(data);
        carbonData = data;
      } else {
        alert('Error: ' + response.statusText);
      }

      return carbonData;
    }

    // Call the function to process ingredients
    processIngredients();