import { useState } from "react";
import RecipeItems from "../../component/recipe-items";
import Search from "../../component/search";


const HomePage = () => {

    const [lodingState, setLoadingState] = useState(false);

    const [recipes, setRecipes] = useState([]);

    const [favorites, setFavorites]=useState([]);

    const getDataFromSearchComponent = (getData) => {

        //keep the loading state as true before calling the api
        setLoadingState(true);
        // console.log(getData);

        //calling api and get data

        async function getRecipes() {

            const apiResponce = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=987bcf646dcf49c088ea78fa39f6b663&query=${getData}`);

            const result = await apiResponce.json();
            const { results } = result;
            // console.log(result.length);
            if (results && results.length > 0) {
                //set loadingState as false
                
                //update recipes
                setLoadingState(false);
                setRecipes(results);
                // console.log(results);
            }
        }

        getRecipes();
    }

    const addToFavorites=(getCurrentRecipe)=>{
        // console.log(getCurrentRecipe);

        let cpyFavorite=favorites;
        let index=cpyFavorite.findIndex(items=>(items.id===getCurrentRecipe.id));
        // console.log(index);
        if(index===-1){
            cpyFavorite.push(getCurrentRecipe);
            setFavorites(cpyFavorite);
        }else{
            alert("Item is already present");
        }
    }
    // console.log(favorites);
    return (
        <div className="Homepage">
            <Search getDataFromSearchComponent={getDataFromSearchComponent} />

            {/* Show loading state */}

            {
                lodingState && <div>Loading Recipes! Please Wait</div>
            }
            {/* Show loading state */}

            {/* render recipes  */}

            {
                recipes&&recipes.length>0 ?
                recipes.map((items)=>(
                    <RecipeItems addToFavorites={()=>addToFavorites(items)} id={items.id} image={items.image} title={items.title} />
                )):null
            }
        </div>
    )
}

export default HomePage;