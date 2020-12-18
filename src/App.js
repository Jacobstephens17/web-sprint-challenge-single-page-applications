import React,{ useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PizzaBuilder from './PizzaBuilder'
import HomePage from './HomePage'
import Confirmation from './Confirmation'

const emptyPizza = {
  
}



const App = () => { 
  const [pizzaToppings, setPizzaToppings] = useState(emptyPizza)
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/PizzaBuilder' component={PizzaBuilder}/>
        <Route path='/Confirmation' component={Confirmation}/>
      </Switch>
    </div>
  )
}; 

export default App;
