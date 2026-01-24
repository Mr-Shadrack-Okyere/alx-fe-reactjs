import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // Show filteredRecipes if searchTerm is not empty, else show all recipes
  const displayRecipes =
    searchTerm.trim() === '' ? recipes : filteredRecipes;

  return (
    <div>
      {displayRecipes.length === 0 && <p>No recipes found.</p>}
      {displayRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
