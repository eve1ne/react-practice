import '../index.css'

export default function Inputer() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    )) 

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    return(
        <>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
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
            <ul>
                {ingredientsListItems}
            </ul>
        </>
    )
}
