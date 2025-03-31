//File for examples of application
const readline = require('readline-sync');
//Recipes would be added and ingredients would be catalogued.
//**(VALUES, DATA TYPES, AND OPERATIONS)** Utilizing an object with several keys and properties to log the name, serving size, and nutritional value of a recipe and tying those values to meaningful keys
const recipe1Example = {
    recipeName: `BLT`,
    servingSize: 1,
    calories: 447,
    fats: `28g`,
    carbs: `27g`,
    protein: `20g`
};
const ingredientsRecipe1 = ["lettuce", "tomato", "bacon", "sandwich bread", "mayo"];

const recipe2Example = {
    recipeName: `PB&J`,
    servingSize: 1,
    calories: 378,
    fats: `18g`,
    carbs: `46g`,
    protein: `12g`
};
const ingredientsRecipe2 = ["peanut butter", "jelly", "sandwich bread"];
//**(BUILDING ARRAYS)** Creating a grocery list utilizing an empty array.
const groceryList = [];
console.log(recipe1Example);
console.log(ingredientsRecipe1);
//**(STRINGING CHARACTERS TOGETHER)** & **(ORGANIZATION AND TIME MANAGEMENT)** Ensuring that the added value to the grocery list is all lower case to make searching easier for the next section and that it is added to the front of the array as a priority item since the user went to add it manually for organization while at the store.
//As the user what they would like to add to the list. If they reply, add that item to the list.
let addToShoppingList = readline.question(`\nWhat would you like to add to your list? `);
if (addToShoppingList !== ""){
    groceryList.unshift(addToShoppingList.toLowerCase());
    console.log(`${addToShoppingList} has been added to your grocery list!\n`)
};
//**(WORKING WITH LOOPS)** & **(CONTROL STRUCTURES AND LOGIC)** & **(USING ARRAYS)** utilizing a for loop to add ingredients to a grocery list. This would happen with a user request to add the recipe to their meal plan.
let addRecipe1ToShoppingList = readline.question(`\nWould you like to add the ingredients for ${recipe1Example['recipeName']} to your list? Y or N\n`) //User input to add ingredient to list
if (addRecipe1ToShoppingList === 'Y' || 'y'){
//if the ingredient is not already on the list, then add it to the list in all lower case letters. Otherwise, do not add it to the list, and move on to the next ingredient. Do this until all the ingredients have been checked.
    for (i=0; i < ingredientsRecipe1.length; i++){
        const onGroceryList = groceryList.includes(ingredientsRecipe1[i]);
        if (onGroceryList === false){
            groceryList.push(ingredientsRecipe1[i].toLowerCase());
        };
    };
};
console.log(`Your Current List:\n${groceryList}`);

let addRecipe2ToShoppingList = readline.question(`\nWould you like to add the ingredients for ${recipe2Example['recipeName']} to your list? Y or N\n`)
if (addRecipe2ToShoppingList === 'Y' || 'y'){
    for (i=0; i < ingredientsRecipe2.length; i++){
        const onGroceryList = groceryList.includes(ingredientsRecipe2[i]);
        if (onGroceryList === false){
            groceryList.push(ingredientsRecipe2[i].toLowerCase());
        };
    };
};
console.log(`Your Current List:\n${groceryList}`);
//This utilizes calling properties in the recipe arrays and explicity converting them to numbers to calculate total caloric intake. This would be tied with some more logic to tie a recipe to a certain time frame which would allow the user to calculate daily or weekly calories or other nutitional facts.
//Take all of the calorie values for the recipes listed and add them together to get the total calories.
let caloricIntake = Number(recipe1Example['calories']) + Number(recipe2Example['calories']);
console.log(`${caloricIntake} Total Calories this week`);