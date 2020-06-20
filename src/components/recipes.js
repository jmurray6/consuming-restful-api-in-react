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
                        <h5 class="card-subtitle mb-2 text-muted">Ingedient1: {recipe.strIngredient1} -- {recipe.strMeasure1} </h5>
                        <h5 class="card-subtitle mb-2 text-muted">Ingedient2: {recipe.strIngredient2} -- {recipe.strMeasure2} </h5>
                        <p class="card-text">{recipe.strInstructions}</p>
                    </div>
                </div>
            ))}
        </div>
    )

};

export default Recipes;