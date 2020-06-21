import React from 'react'

const Recipes = ({recipes}) => {
    return (
        <div>
            <center><h1>Random Cocktail</h1></center>
            { recipes.map((recipe) => (
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">{recipe.strDrink}</h3>
                        <h4 class="card-subtitle mb-2 text-muted">{recipe.strCategory}, ID: {recipe.idDrink}</h4>
                        <h5 class="card-subtitle mb-2 text-muted">Ingredients:</h5>
                        <h5 class="card-subtitle">{recipe.strIngredient1} : {recipe.strMeasure1} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient2} : {recipe.strMeasure2} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient3} : {recipe.strMeasure3} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient4} : {recipe.strMeasure4} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient5} : {recipe.strMeasure5} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient6} : {recipe.strMeasure6} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient7} : {recipe.strMeasure7} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient8} : {recipe.strMeasure8} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient9} : {recipe.strMeasure9} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient10} : {recipe.strMeasure10} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient11} : {recipe.strMeasure11} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient12} : {recipe.strMeasure12} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient13} : {recipe.strMeasure13} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient14} : {recipe.strMeasure14} </h5>
                        <h5 class="card-subtitle">{recipe.strIngredient15} : {recipe.strMeasure15} </h5>
                        <p class="card-text">{recipe.strInstructions}</p>
                    </div>
                </div>
            ))}
        </div>
    )

};

export default Recipes;