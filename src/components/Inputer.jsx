import '../index.css'
import { useState } from "react"
import Recipe from "./Recipe"

export default function Inputer() {
    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    )) 

    function handleSubmit(formData) { // Use form action instead of onSubmit to avoid extra steps (clearing the submition)
        const newIngredient = formData.get("ingredient")
        // ingredients.push(newIngredient) Can't edit the state (bad)

        // Adds the new ingredient to the end of the list after the last previous ingredient that was added
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const [recipeShown, setRecipeShown] = useState(false)
    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    return(
        <>
            <form action={handleSubmit} className="add-ingredient-form">
                <input  
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>
                    + Add Ingredient
                </button>
            </form>
            <section {...ingredients.length === 0 && { className: "hide-ingredients" }}>
                <div className="ingredients-list">
                    <h2>Ingredients on hand:</h2>
                    <ul>
                        {ingredientsListItems}
                    </ul>
                </div>
                <div className="recipe-generator" {...ingredients.length < 4 && { className: "hide-ingredients" }}>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div>
                {recipeShown && <Recipe />}
            </section>
        </>
    )
}
