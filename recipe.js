'use strict';
function addIngredient(recipe, ingredient, value){
  recipe[ingredient] = value;
  return recipe;
}

function removeIngredient(recipe, ingredient){
  delete recipe[ingredient];
  return recipe;
}

function updateIngredient(recipe, ingredient, value){
  recipe[ingredient] = value;
  return recipe;
}

function readRecipe(recipe){
  if(Object.keys(recipe).length == 0){
    console.log("Recipe is empty");
  } else {
    for(var ingredient in recipe){
      console.log("this recipe calls for " + recipe[ingredient] + " of " + ingredient);
    }
  }
}