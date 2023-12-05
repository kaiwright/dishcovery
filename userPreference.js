document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("save-button").addEventListener("click", savePreferences);
});

function savePreferences() {
    var preferences = {
        female: getCheckboxValue("female"),
        male: getCheckboxValue("male"),
        other: getCheckboxValue("other"),
        weight: getInputValue("wheight"),
        height: getInputValue("height"),
        celery: getCheckboxValue("celery-free"),
        crustacean: getCheckboxValue("crustacean-free"),
        dairy: getCheckboxValue("dairy-free"),
        egg: getCheckboxValue("egg-free"),
        fish: getCheckboxValue("fish-free"),
        gluten: getCheckboxValue("gluten-free"),
        lupin: getCheckboxValue("lupin-free"),
        mustard: getCheckboxValue("mustard-free"),
        peanut: getCheckboxValue("peanut-free"),
        sesame: getCheckboxValue("sesame-free"),
        shellfish: getCheckboxValue("shellfish-free"),
        soy: getCheckboxValue("soy-free"),
        treenutfree: getCheckboxValue("tree-nut-free"),
        wheat: getCheckboxValue("wheat-free"),
        vegan: getCheckboxValue("vegan-free"),
        vegetarian: getCheckboxValue("vegetarian"),
        pescatarian: getCheckboxValue("pescatarian"),
        american: getCheckboxValue("american"),
        asian: getCheckboxValue("asian"),
        chinese: getCheckboxValue("chinese"),
        eastereurope: getCheckboxValue("easter-europe"),
        french: getCheckboxValue("french"),
        indian: getCheckboxValue("indian"),
        italian: getCheckboxValue("italian"),
        mediterranean: getCheckboxValue("mediterranean"),
        mexican: getCheckboxValue("mexican"),
        middleeastern: getCheckboxValue("middle-eastern"),
        southamerican: getCheckboxValue("south-american"),
        breakfast: getCheckboxValue("breakfast"),
        lunch: getCheckboxValue("lunch"),
        dinner: getCheckboxValue("dinner"),
        monday: getCheckboxValue("monday"),
        tuesday: getCheckboxValue("tuesday"),
        wednesday: getCheckboxValue("wednesday"),
        thursday: getCheckboxValue("thursday"),
        friday: getCheckboxValue("friday"),
        saturday: getCheckboxValue("saturday"),
        sunday: getCheckboxValue("sunday"),
    };

    localStorage.setItem("userPreferenceAbout", JSON.stringify(preferences));
}

function getCheckboxValue(id) {
    var checkbox = document.getElementById(id);
    return checkbox ? checkbox.checked : false;
}

function getInputValue(id) {
    var input = document.getElementById(id);
    return input ? input.value : "";
}
