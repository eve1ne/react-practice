import Recipe from "./Recipe"
import { getRecipeFromMistral } from "../ai"
import { useState, useEffect, useRef } from "react"

export default function IngredientsList(props) {
    const [HFRecipe, setHFRecipe] = useState("")
    const targetSectionRef = useRef(null)

    // Hooks must be top level
    useEffect(() => {
        if (HFRecipe && targetSectionRef.current) {
            targetSectionRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    }, [HFRecipe])

    async function handleHFRecipe() {
        const generatedRecipeMarkdown =
            await getRecipeFromMistral(props.ingredients)

        setHFRecipe(generatedRecipeMarkdown)
    }

    return (
        <section className={props.ingredients.length === 0 ? "hide-ingredients" : ""}>
            <div className="ingredients-list">
                <h2>Ingredients on hand:</h2>
                <ul>
                    {props.listItems}
                </ul>
            </div>
            <div
            className={
                props.ingredients.length < 4 ? "hide-ingredients" : "recipe-generator"
            }
            >
                <span>
                    <h2>Ready for a recipe?</h2>
                    <p>Generate a recipe from your list of ingredients.</p>
                </span>
                <button onClick={handleHFRecipe}>Get a recipe</button>
            </div>
            <div ref={targetSectionRef}>
                {HFRecipe && <Recipe recipe={HFRecipe} />}
            </div>
        </section>
    )
}
