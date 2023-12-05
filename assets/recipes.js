
var ingredient;

co2Data = []
recipeNames = []
ingredientsArray = []


// search 
function search() {
    var input = document.getElementById("userInput").value;
    // JSON.stringify(input)
    ingredient = input;
    fetchRecipes()
}


// recipes API fetch
function fetchRecipes() {
    var queryURL = "https://api.edamam.com/api/recipes/v2?type=public&q=" + ingredient + "&app_id=2e4c3f7b&app_key=9937b42f06b25b17a8890d5216e8728a";
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            //clears previous results
            $("#mainCard").empty();
            cuisineTypeArray = []

            // create variables
            let x
            for (x = 1; x < (data.hits).length; x++) {
                co2Data.push(window['data' + x] = + Math.round(data.hits[x].recipe.totalCO2Emissions));
            }


            // for loop to go through each of the returned recipes
            for (var i = 0; i < (data.hits).length; i++) {

                // store all recipe names
                recipeNames.push(data.hits[i].recipe.label);

                // creates a new card element
                var newCard = $("<div>").addClass("card col");

                // create a card body to attach to
                var recipeContainer = $("<div>").addClass("card-body");

                // creates a new image element
                var recipeImg = $("<img>").addClass("card-img-top p-2");

                // applies the url to the src
                recipeImg.attr("src", data.hits[i].recipe.image);

                // appends the image to the card div
                newCard.append(recipeImg);

                // creates new title element
                var cardTitle = $("<h5>").addClass("card-title");

                // applying the recipe name to the title element
                cardTitle.text(data.hits[i].recipe.label);

                // append the title to the card div
                recipeContainer.append(cardTitle);

                // Country of recipe origin 
                for (var index = 0; index < (data.hits[i].recipe.cuisineType).length; index++) {

                    // converts first letter to Uppercase for consistency
                    var result = (data.hits[i].recipe.cuisineType[index]);
                    var uppercaseResult = result.charAt(0).toUpperCase() + result.slice(1);

                    // creates new p element
                    var cardBody = $("<p>").addClass("card-text cuisineType");

                    // applying information about the recipe to a new card text
                    cardBody.text(uppercaseResult);

                    // append the card body to the card
                    recipeContainer.append(cardBody);

                    // cuisine type array
                    cuisineTypeArray.push(result);

                }

                // Diet labels
                for (var index = 0; index < (data.hits[i].recipe.dietLabels).length; index++) {
                    // creates new p element
                    var cardBody = $("<p>").addClass("card-text dietLabels");

                    // applying information about the recipe to a new card text
                    cardBody.text(data.hits[i].recipe.dietLabels[index]);

                    // append the card body to the card
                    recipeContainer.append(cardBody);
                }

                // Meal Type
                for (var index = 0; index < (data.hits[i].recipe.mealType).length; index++) {

                    // converts first letter to Uppercase for consistency
                    var result = (data.hits[i].recipe.mealType[index]);
                    var uppercaseResult = result.charAt(0).toUpperCase() + result.slice(1);

                    // creates new p element
                    var cardBody = $("<p>").addClass("card-text mealType");

                    // applying information about the recipe to a new card text
                    cardBody.text(uppercaseResult);

                    // append the card body to the card
                    recipeContainer.append(cardBody);

                }
                // button creation
                var recipeButton = $("<a>").addClass("btn btn-primary");

                // applying the recipe link to the new button
                recipeButton.attr("href", (data.hits[i].recipe.url));
                recipeButton.text("Go to Recipe");

                // appending button to card
                recipeContainer.append(recipeButton);

                //appends new card and then recipe container
                newCard.append(recipeContainer);
                $("#mainCard").append(newCard);
            }
        });
}





