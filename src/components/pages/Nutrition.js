
import '../Navbar';
import './Page.css'
import jas from './subpages/Json_files/Recipes.json'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';



function Nutrition() {

  const [data, setData] = useState({});



  useEffect(() => {
    Object.keys(jas).map(e => { return console.log(e.toString()) });
    setData(jas);

  }, [])

  return (


    <div>

      
      <div className='hero-container'>

        <h1 className="nutr_heading"> Try The Amazing Ethiopian Foods </h1>
        <p className="nutr_text">Tasty !</p>

      </div>

      <div className='hero-container-nutr'>

        <h2 >Carn Foods</h2>

      </div>




      <div class="cards-list-nutr">

        <div class="card 1">
          <div class="card_image"> <img src="images/kitfo.jpg" alt="Kitfo" />
            <h5 className="card_details_ing">Minced Raw Beef(Kitfo) </h5>

            <Link to={`/Recipe/${'SteakTartar-Kitfo'}`} onClick="">

              <button aria-label="View Receipe button">View Recipe </button>
            </Link>

          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            <img src="images/lamb_tibs.png" alt="Fried Lamb" />
            <h5 className="card_details_ing"> Ethiopian Stir Fried Lamb</h5>

            <Link to={`/Recipe/${'EthiopinaStir-Friedlamb'}`} onClick="">

              <button aria-label="View Receipe button">View Recipe </button>
            </Link>

          </div>
        </div>

        <div class="card ">
          <div class="card_image">
            <img src="images/chicken_stew.jpg" alt="Chicken Stew" />

            <h5 className="card_details_ing">Chicken Stew (Doro-Wot)</h5>

            <Link to={`/Recipe/${'ChickenStew'}`} onClick="">

              <button aria-label="View Receipe button">View Recipe </button>
            </Link>

          </div>
        </div>

      </div>

      <div className="hero-container-nutr-2">
        <h2>Vegan Foods</h2>
      </div>


      <div class="cards-list-nutr">
        <div class="card 1">
          <div class="card_image"> <img src="images/tikil_gomen.jpg" alt="Cabbage" />
            <h5 className="card_details_ing">Cabbage Dish (Atakilt) </h5>

            <Link to={`/Recipe/${'CabbageDish'}`} onClick="">

              <button aria-label="View Receipe button">View Recipe </button>
            </Link>

          </div>


        </div>

        <div class="card 2">
          <div class="card_image">
            <img src="images/shiro-wot.jpg" alt="Shiro Wot" />
            <h5 className="card_details_ing">Shiro-wot</h5>

            <Link to={`/Recipe/${'Shiro-Wat'}`} onClick="">

              <button aria-label=" View Receipe button">View Recipe </button>
            </Link>

          </div>

        </div>


        <div class="card 3">
          <div class="card_image">
            <img src="images/collard_green.jpg" alt="Collard Greens" />
            <h5 className="card_details_ing">Collard Greens (Ye'habesha Gomen) </h5>

            <Link to={`/Recipe/${'CollardGreens'}`}>

              <button aria-label="View Receipe button">View Recipe </button>
            </Link>

          </div>

        </div>

      </div>


      <div>


        <footer> © EthioFood 2021</footer>
      </div>

    </div>





  );
}

export default Nutrition;

