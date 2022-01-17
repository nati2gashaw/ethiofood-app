import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Nutrition from './components/pages/Nutrition'
import Articles from './components/pages/Articles'
import Contact from './components/pages/Contact'
import Food from './components/pages/subpages/Food'
import Cook from './components/pages/subpages/Cook'
import Recipe from './components/pages/subpages/Recipe'
import Ingredients from './components/pages/subpages/ingredients';

function App() {

  const [data, setData] = useState([]);



  useEffect(() => {
    fetch('./Json_files/CarnRecipe.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (resp) {
        setData(resp);
      })
      .catch(function (err) {
        console.log('error: ' + err);
      });
      console.log(data)
  }, [])










  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/nutrition' component={Nutrition} />
          <Route path='/Articles' component={Articles} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Food' component={Food} />
          <Route path='/Ingredients' component={Ingredients} />
          <Route path='/Cook' component={Cook} />
          <Route path='/Recipe/:id' component={Recipe}>
            {/* <Recipe data={data} /> */}
          </Route>
        </Switch>
      </Router>
    </>





  );
}

export default App;
