import '../index.css'
import { useState } from "react"
import IngredientsList from "./IngredientsList"

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

    return(
        <>
            <h3>Send me any ingredients you have! I'll suggest some recipes.</h3>
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
            <IngredientsList ingredients={ingredients} listItems={ingredientsListItems}/>
        </>
    )
}
