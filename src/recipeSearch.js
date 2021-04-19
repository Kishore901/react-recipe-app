import { useEffect, useState } from 'react';
import Recipe from './Recipe';
const RecipeSearch = () => {
  const APP_ID = 'c340df23';
  const APP_KEY = '597bfbfa1527ddbda6d42ec05c9b29ef';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setquery] = useState('chicken');

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipe();
  }, [query]);

  // to show the input field value
  const updateSearchBar = (e) => {
    setSearch(e.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    setquery(search);
    setSearch('');
  };

  return (
    <div>
      <form onSubmit={searchSubmit} className="search-form">
        <input
          required
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearchBar}
        />
        <button className="search-button" type="submit">
          Click
        </button>
      </form>
      <div className="indiv-recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            cuisine={recipe.recipe.cuisineType}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
