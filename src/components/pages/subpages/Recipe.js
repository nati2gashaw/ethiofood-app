import { React, useState, useEffect } from 'react';
import '../Page.css'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import jas from './Json_files/Recipes.json'





function Recipe() {
  let params = useParams();
  

  const [rec, setRec] = useState({
    ingredients: []

  });
  const [loading, setLoading] = useState(true);

  {/*pulling  the carn  recipe data from the json file   */ }
  useEffect(() => {
    console.log(jas[params.id]);
    if (jas[params.id]) {
      setRec(jas[params.id])
      setLoading(false)
    }

  }, [])

  {/*pulling  the vegan recipe data from the json file   */ }

  if (loading) {
    return (<div>Loading...</div>)
  } else {
    return (
      <div className="recipe">

        <h1>{rec.name}</h1>
        {/*iterating through the json file using file display single elements of the array */}
        <img src={`/${rec.imageURL}`} alt='recipe '  style={{width:"60vh"}}/>
        <ul>{rec ? rec.ingredients.map(e => { return <li>{e.name}</li> }) : null
        }</ul>

        <ol>{rec ? rec.steps.map(e => { return <li>{e} </li> }) : null}</ol>


        <div class="hero_container">
          <h3 className="hero-container-recipe-text"> Check out the common Ethiopian Cooking items</h3>
          <p className="hero-container-recipe-text-2">use the recipes and  give it a try . </p>          <div>

            <Link to="/cook" onClick="">

              <button aria-label="button" className='btn_explore'> Cookware </button>
            </Link>

          </div>
        </div>


      </div>

    );
  }
}

export default Recipe;