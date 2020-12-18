import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import Pizza from './Assets/Pizza.jpg'


function Confirmation(props) {
    const { details } = props;
    return(
        <div>

            <div className="header">
        
                <h1>Lambda Eats</h1>

                <Link to='/'>Home Page</Link> 
                <Link to='/PizzaBuilder'>Pizza Builder</Link>

                <button>Help</button>
            </div>
            <div>
                <image src='./Assets/Pizza.jpg'></image>
                <h1>Congrats! Pizza is on it's way!</h1>

            </div>
            <div>
                <img className="pizzaConfirm" src={Pizza}></img>
                <h2>We hope to see you again, Enjoy!</h2>
            </div>
        </div>
    )
}

export default Confirmation;