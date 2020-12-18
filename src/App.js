import React,{ useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PizzaBuilder from './PizzaBuilder'
import HomePage from './HomePage'
import Confirmation from './Confirmation'

const emptyPizza = {

}

const confirmedPizza = {

}

const App = () => { 
  const [pizzaToppings, setPizzaToppings] = useState(emptyPizza)

  setEmptyPizza({
    ...emptyPizza,
    [name]: value, // NOT AN ARRAY
  });
};

const formSubmit = () => {
  const newPizza = {
    size: formValues.size.trim(),
    sauce: formValues.sauce.trim(),
    toppings: formValues.toppings.trim(),
    substitute: formValues.substitute,
    special: formValues.special
  };
  confirmedPizza(newPizza);
};
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
