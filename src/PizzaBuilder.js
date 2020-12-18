import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'


function PizzaBuilder(props) {

    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
      };
    
      const onChange = (event) => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
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
                <select>
                    <option>-----Select Size-----</option>
                    <option>XL</option>
                    <option>Large</option>
                    <option>Medium</option>
                    <option>Small</option>
                    <option>Kids</option>
                </select>
            </div>

            <div>
                <h2>Choice of Sauce</h2>
                <label>
                    <input 
                        type="radio"
                        name="Original Red"
                    ></input>
                Original Red
                </label>
<br/>
                <label>
                    <input 
                        type="radio"
                        name="Original Red"
                    ></input>
                Garlic Ranch
                </label>
<br/>
                <label>
                    <input 
                        type="radio"
                        name="Original Red"
                    ></input>
                BBQ Sauce
                </label>
<br/>
                <label>
                    <input 
                        type="radio"
                        name="Original Red"
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
                        name="Pepperoni"
                        // checked={values.pepperoni}
                    ></input>
                Pepperoni
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="Sausage"
                        // checked={values.sausage}
                    ></input>
                Sausage
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="Canadian Bacon"
                        // checked={values.canadianBacon}
                    ></input>
                Canadian Bacon
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="Spicy Italian Sausage"
                        // checked={values.italianSausage}
                    ></input>
                Spicy Italian Sausage
                </label>

                <label>
                    <input 
                        type="checkbox"
                        name="Grilled Chicken"
                        // checked={values.grilledChicken}
                    ></input>
                Grilled Chicken
                </label>

                <label>
                    <input 
                        type="checkbox"
                        // checked={values.onion}
                        name="Onions"
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
                        // checked={values.glutenBox}
                        name="Gluten Free Crust"
                    ></input>
                Gluten Free Crust (+ $1.00)
                </label>
            </div>

            <div>
                <h2>Special Instructions</h2>
                <input
                type="text"
                placeholder="Anything else you'd like to add?"
                onChange={onChange}
                name="extraInstructions"
                >
                </input>
            </div>


            <Link to='/Confirmation'>Add to Order</Link>
        </form>
        </div>
        
        </div>
    )
}

export default PizzaBuilder