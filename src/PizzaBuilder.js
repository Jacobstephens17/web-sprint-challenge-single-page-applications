import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import schema from "./cypress/integration/schema";
import axios from 'axios'
import * as yup from 'yup'


const initialPizzaValues = {
    size: "",
    sauce: "",
    pepperoni: false,
    sausage: false,
    canadianBacon:false,
    spicyItalianSausage:false,
    grilledChicken:false,
    onion:false,
    
  };
  
  const initFormErrors = {
    size: "",
    sauce: "",
  };
  
  const toppingsList = ["pepperoni", "sausage", "sausage", "canadianBacon", "spicyItalianSausage", "grilledChicken", "onion"];
  

  
  const PizzaBuilder = () => {
    const [pizzaValues, setpizzaValues] = useState(initialPizzaValues);
    const [disabled, setDisabled] = useState(true);
    const [formErrors, setFormErrors] = useState(initFormErrors);

  

  
    // const postNewOrder = (newOrder) => {
    //   axios.post("https://reqres.in/api/users", newOrder).then((result) => {
    //     setpizzaValues(initialPizzaValues);
    //   });
    // };
  
    const onChange = (evt) => {
      const { pizzaValues, value, type, checked } = evt.target;
      const valueToUse = type === "checkbox" ? checked : value;
    //   yup
    //     .reach(schema, pizzaValues)
    //     .validate(value)
    //     .then(() => {
    //       setFormErrors({
    //         ...formErrors,
    //         [pizzaValues]: "",
    //       });
    //     })
    //     .catch((err) => {
    //       setFormErrors({
    //         ...formErrors,
    //         [pizzaValues]: err.errors[0],
    //       });
    //     });
    //   setpizzaValues({
    //     ...pizzaValues,
    //     [pizzaValues]: valueToUse,
    //   });
    //   setDisabled(true)
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      const newOrder = {
        size: pizzaValues.size,
        sauce: pizzaValues.sauce,
        toppings: toppingsList.filter(topping => {
            return pizzaValues[topping];
        }),
        glutenFree: pizzaValues.glutenFree,
        special: pizzaValues.special,
      };
      setpizzaValues(newOrder)
    //   postNewOrder(newOrder);
    };
  
    return(
        <div>
            <div classpizzaValues="header">
        
                <h1>Lambda Eats</h1>

                <Link to='/'> HomePage</Link>

                <button>Help</button>
            </div>
        <div>
            <h2>Build Your Own Pizza!</h2>
            
        <form onSubmit={onSubmit}>
            <div>
                    
            </div>
            <div>
                <h2>Choice of Size</h2>
                <h4>Required</h4>
                <select
                    pizzaValues="toppings"
                    type="text"
                    name="dropdown"
                    // value={pizzaValues.toppings}
                    onChange={onChange}>
                    <option>-----Select Size-----</option>
                    <option value='xl'>XL</option>
                    <option value='large'>Large</option>
                    <option value='medium'>Medium</option>
                    <option value='small'>Small</option>
                    <option value='kids'>Kids</option>
                </select>
            </div>

            <div>
                <h2>Choice of Sauce</h2>
                <label>
                    <input 
                        type="radio"
                        pizzaValues="sauce"
                        value="redSauce"
                        checked={pizzaValues.sauce === 'originalRed'}
                    ></input>
                Original Red
                </label>
<br/>
                <label>
                    <input 
                        type="radio"
                        pizzaValues="sauce"
                        value="garlicSauce"
                        checked={pizzaValues.sauce === 'garlicSauce'}
                    ></input>
                Garlic Ranch
                </label>
<br/>
                <label>
                    <input 
                        type="radio"
                        pizzaValues="sauce"
                        value="bbq"
                        checked={pizzaValues.sauce === 'bbq'}
                    ></input>
                BBQ Sauce
                </label>
<br/>
                <label>
                    <input 
                        type="radio"
                        pizzaValues="sauce"
                        value="spinachAlfredo"
                        checked={pizzaValues.sauce === 'spinachAlfredo'}
                    ></input>
                Spinach Alfredo
                </label>


            </div>
            
            <div>
                <h2>Add Toppings</h2>

                <h4>Choose up to 10</h4>

                <label>
                    <input 
                       type="checkbox"
                       pizzaValues="pepperoni"
                       value="pepperoni"
                       checked={pizzaValues.pepperoni}
                       onChange={onChange}
                    ></input>
                Pepperoni
                </label>

                <label>
                    <input 
                        type="checkbox"
                        pizzaValues="sausage"
                        checked={pizzaValues.sausage}
                        onChange={onChange}
                    ></input>
                Sausage
                </label>

                <label>
                    <input 
                        type="checkbox"
                        pizzaValues="canadianBacon"
                        checked={pizzaValues.canadianBacon}
                        onChange={onChange}
                    ></input>
                Canadian Bacon
                </label>

                <label>
                    <input 
                        type="checkbox"
                        pizzaValues="spicyItalianSausage"
                        checked={pizzaValues.spicyItalianSausage}
                        onChange={onChange}
                    ></input>
                Spicy Italian Sausage
                </label>

                <label>
                    <input 
                        type="checkbox"
                        pizzaValues="grilledChicken"
                        checked={pizzaValues.grilledChicken}
                        onChange={onChange}
                    ></input>
                Grilled Chicken
                </label>

                <label>
                    <input 
                        type="checkbox"
                        pizzaValues="onion"
                        checked={pizzaValues.onion}
                        onChange={onChange}
                    ></input>
                Onions
                </label>


            </div>

            <div>
                <h2>Choice of Substitute</h2>
                <h4>Choose up to 1</h4>
                <label>
                    <input 
                        type="checkbox"
                        pizzaValues="gfCrust"
                        checked={pizzaValues.glutenBox}
                        onChange={onChange}
                    ></input>
                Gluten Free Crust (+ $1.00)
                </label>
            </div>

            <div>
                <h2>Special Instructions</h2>
                <input
                type="text"
                placeholder="Special Requests?"
                onChange={onChange}
                name="specialRequest"
                pizzaValues="specialRequest"
                checked = {pizzaValues.specialRequest}
                >
                </input>
            </div>


            <Link id="submit" disabled={disabled} to='/Confirmation'>Add to Order</Link>
        </form>

        </div>
        
        </div>
    )
}

export default PizzaBuilder