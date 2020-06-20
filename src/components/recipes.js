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
                        <h6 class="card-subtitle">{recipe.strIngredient1} : {recipe.strMeasure1} </h6>
                        <h6 class="card-subtitle">{recipe.strIngredient2} : {recipe.strMeasure2} </h6>
                        <p class="card-text">{recipe.strInstructions}</p>
                        <h6 class="card-subtitle">butts </h6>
                    </div>
                </div>
            ))}
        </div>
    )

};

export default Recipes;