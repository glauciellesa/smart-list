/* eslint-disable react/prop-types */
const RecipeDetailPage = ({ recipe }) => {
  // console.log(recipe);
  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>{recipe.timeToPrepare}</h3>
      <img
        src={`https://source.unsplash.com/${recipe.photo}/400x300`}
        alt={`Pictures of ${recipe.name}`}
      />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((element, index) => (
          <li key={element + index}>{element}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailPage;
