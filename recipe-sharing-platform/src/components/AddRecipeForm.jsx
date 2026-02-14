import { useState } from "react"

function AddRecipeForm() {
  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [steps, setSteps] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!title.trim()) {
      newErrors.title = "Recipe title is required"
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required"
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Enter at least two ingredients separated by commas"
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    const newRecipe = {
      title,
      ingredients: ingredients.split(",").map(item => item.trim()),
      instructions: steps.split("\n")
    }

    console.log("New Recipe Submitted:", newRecipe)

    alert("Recipe added successfully!")

    setTitle("")
    setIngredients("")
    setSteps("")
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Add New Recipe</h2>

        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">
            Ingredients (comma separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-medium mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  )
}

export default AddRecipeForm
