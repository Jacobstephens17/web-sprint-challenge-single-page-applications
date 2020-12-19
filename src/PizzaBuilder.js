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
    mushrooms: false,
    olives: false,
    glutenFree: false,
    special: "",
  };
  
  const initFormErrors = {
    size: "",
    sauce: "",
  };
  
  const toppingsList = ["pepperoni", "sausage", "mushrooms", "olives"];
  
  const PizzaBuilder = () => {
    const [pizzaValues, setpizzaValues] = useState(initialPizzaValues);
    const [disabled, setDisabled] = useState(true);
    const [formErrors, setFormErrors] = useState(initFormErrors);

  

  
    const postNewOrder = (newOrder) => {
      axios.post("https://reqres.in/api/users", newOrder).then((result) => {
        setpizzaValues(initialPizzaValues);
      });
    };
  
    const onChange = (evt) => {
      const { name, value, type, checked } = evt.target;
      const valueToUse = type === "checkbox" || "radio" ? checked : value;
    //   yup
    //     .reach(schema, name, value, type, checked)
    //     .validate(value, type, name, checked)
    //     .then(() => {
    //       setFormErrors({
    //         ...formErrors,
    //         [name]: "",
    //       });
    //     })
    //     .catch((err) => {
    //       setFormErrors({
    //         ...formErrors,
    //         [name]: err.errors[0],
    //       });
    //     });
    //   setpizzaValues({
    //     ...pizzaValues,
    //     [name]: valueToUse,
    //   });
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
      postNewOrder(newOrder);
    };
  
    return(
        <div>
            <div className="header">
        
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
                    name="toppings"
                    type="text"
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
                        name="sauce"
                        value="redSauce"
                        checked={pizzaValues.sauce === 'originalRed'}
                    ></input>
                Original Red
                </label>
<br/>
                <label>
                    <input 
                        type="radio"
                        name="sauce"
                        value="garlicSauce"
                        checked={pizzaValues.sauce === 'garlicSauce'}
                    ></input>
                Garlic Ranch
                </label>
<br/>
                <label>
                    <input 
                        type="radio"
                        name="sauce"
                        value="bbq"
                        checked={pizzaValues.sauce === 'bbq'}
                    ></input>
                BBQ Sauce
                </label>
<br/>
                <label>
                    <input 
                        type="radio"
                        name="sauce"
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
                       name="pepperoni"
                       checked={pizzaValues.pepperoni}
                       onChange={onChange}
                    ></input>
                Pepperoni
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="sausage"
                        checked={pizzaValues.sausage}
                        onChange={onChange}
                    ></input>
                Sausage
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="canadianBacon"
                        checked={pizzaValues.canadianBacon}
                        onChange={onChange}
                    ></input>
                Canadian Bacon
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="spicyItalianSausage"
                        checked={pizzaValues.spicyItalianSausage}
                        onChange={onChange}
                    ></input>
                Spicy Italian Sausage
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="grilledChicken"
                        checked={pizzaValues.grilledChicken}
                        onChange={onChange}
                    ></input>
                Grilled Chicken
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="onion"
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
                        name="gfCrust"
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