import '../index.css'
import { useState } from "react"

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

        let showIngredients = false
        if (ingredients.length === 0) {
            showIngredients = false
        } else {
            showIngredients = true
        }
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
            <section>
                <div className="ingredients-list">
                    <h2>Ingredients on hand:</h2>
                    <ul>
                        {ingredientsListItems}
                    </ul>
                </div>
                <div className="recipe-generator">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                    <button>Get a recipe</button>
                </div>

            </section>
        </>
    )
}
