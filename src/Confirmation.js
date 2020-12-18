import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'


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
                <h1>Congrats! Pizza is on it's way!</h1>

            </div>
            <div>
                <h2>Enjoy this dog with Pizza</h2>
                <image></image>
            </div>
        </div>
    )
}

export default Confirmation