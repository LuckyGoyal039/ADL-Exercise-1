
import './style.css';
const RecipeItems=(props)=>{
    const {id, image, title, addToFavorites}=props;
    // cons
    return(
        <div key={id} className="recipe">
        <div>{id}</div>
        <img src={image} alt="loading image"/>
        <div>{title}</div>
        <button type="button" onClick={addToFavorites}>Add To favorites</button>
        </div>
    )
}

export default RecipeItems;