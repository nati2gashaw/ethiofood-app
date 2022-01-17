import React from 'react';

import './Food.css'


import { Link } from "react-router-dom";


function Food() {
  return (
    <div>
      <div className='hero-container'>

        <h1 className="food_heading">How much do you know about Ethiopian food ?</h1>
        <p className="food_text">learn about different kinds of Ethiopian Food</p>

      </div>

      <div className='hero-container-food'>

        <h2 className="bfast">Breakfast</h2>
      </div>


      <div class="cards-list">
        <div class="card 1">
          <div class="card_image"> <img src="images/chechebsa.jpg" alt="chechebsa" />
            <h4 className="card_details_food-1"> Chechebsa</h4>
            <p className="card_details_food-2">All-purpose Flour,Olive oil, Berbere,Salt,honey</p>
          </div>

        </div>

        <div class="card 2">
          <div class="card_image">
            <img src="images/Firfir.jpg" alt="Firfir" />
            <h4 className="card_details_food-1"> Firfir</h4>
            <p className="card_details_food-2">Injera,chopped Onions,Berebere seasoning, Olive Oil,chopped Tomatoes,Garlic paste, Butter,Salt</p>


          </div>
        </div>

        <div class="card 3">
          <div class="card_image">
            <img src="images/Fatira.jpg" alt="Collard Green" />
            <h4 className="card_details_food-1"> Fatira</h4>
            <p className="card_details_food-2">All purpose flour, Olive Oil,Eggs, Onion , Tomato , Hot pepers(Berbere) , Salt</p>
          </div>

        </div>


      </div>
      <div className='hero-container-food'>
        <h2 className="lunch" >Lunch / Dinner</h2>
      </div>




      <div class="cards-list">
        <div class="card 1">
          <div class="card_image"> <img src="images/chicken_stew.jpg" />
            <h4 className="card_details_food-1">Chicken Stew (Doro-Wot)</h4>
            <p className='card_details_food-2'>Chicken thighs, Eggs , Butter, Salt, Onion,Garlic and  various kind of Spices</p>
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            <img src="images/lamb_tibs.png" />
            <h4 className='card_details_food-1'>Ethiopian Stir Fried Lamb  (Ye'beg Tibs)</h4>
            <p className='card_details_food-2'>Lamb meat, Butter, Olive oil,Onions, Garlic,Jalepenos,Salt</p>
          </div>

        </div>

        <div class="card 3">
          <div class="card_image">
            <img src="images/kitfo.jpg" />
            <h4 className="card_details_food-1">Kitfo</h4>
            <p className="card_details_food-2">Minced Raw Beef, Cayene Pepper(Mitmita) , Butter, Cardmom powder,Salt </p>

          </div>
        </div>

      </div>

      <div>
        <h5 className="hero-container-food-text"> Are you Vegan or Carn ?</h5>
        <p className="hero-container-food-text-2"> click below & see the  Vegan & Carn food choices </p>
      </div>



      <div>
        <Link to="/nutrition" onClick="">

          <button aria-label="button" className='btn_explore'> Explore </button>
        </Link>
      </div>













    </div>
  );
}

export default Food;
