import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_RECIPE } from "../lib/requests";

const CreateRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [userId] = useState(1); // You may obtain the user ID dynamically

  const [createRecipe] = useMutation(CREATE_RECIPE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createRecipe({
        variables: {
          name,
          ingredients: ingredients
            .split(",")
            .map((ingredient) => ingredient.trim()),
          steps,
          userId,
        },
      });

      // Reset the form after successful submission
      setName("");
      setIngredients("");
      setSteps("");
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <div>
      <h2>Create a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients (comma-separated):</label>
          <input
            type="text"
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="steps">Steps:</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
