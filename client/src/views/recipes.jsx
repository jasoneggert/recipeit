import { useQuery } from "@apollo/client";
import { GET_RECIPES } from "../lib/requests";
const Recipes = () => {
  const { loading, error, data } = useQuery(GET_RECIPES);
  console.log("🚀 ~ file: App.jsx:13 ~ data:", data);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data)
    return (
      <>
        {data.recipes.map((recipe) => (
          <div key={recipe.id}>
            <p>{recipe.name}</p>
            <p>{recipe.ingredients}</p>
            <p>{recipe.steps}</p>
            <p>{recipe.userId}</p>
          </div>
        ))}
      </>
    );
};

export default Recipes;
