const Recipe = ({ caloreis, title, cuisine, image, ingredients }) => {
  return (
    <div className="recipee">
      <h2>{title}</h2>
      {/* {cuisine && <p>{cuisine}</p>}
      {!cuisine && <p>No cuisine data</p>} */}
      <ol>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.text}</li>
        ))}
      </ol>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
