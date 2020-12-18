import React, { useState, useEffect } from 'react'
import { Route, Link, Switch} from "react-router-dom";

function HomePage(){

    return (

        <div>
            
            <div className="header">
        
                <h1>Lambda Eats</h1>
        
                <Link to='/'> HomePage</Link>
        
                <button>Help</button>
            </div>
    
            <div>
    
                <p>Your Favorite food, delivered while coding</p>
    
                <Link to='/PizzaBuilder'>Pizza?</Link>
        
            </div>
    
        
            <h2>Food delivery in Gotham City</h2>

            <div className='card'>
                <image></image>  
                <h4>McDonald's</h4>
                <p>$ - American - Fast Food - Burgers</p>
                <p><span>20-30 Min</span> <span>$5.99 Deleivery Fee</span></p>
            </div>
    
            <div className='card'>
                <image></image>  
                <h4>Canes</h4>
                <p>$ - American - Fast Food - Chicken</p>
                <p><span>20-30 Min</span> <span>$5.99 Deleivery Fee</span></p>
            </div>
    
            <div className='card'>
                <image></image>  
                <h4>Burger King</h4>
                <p>$ - American - Fast Food - Burgers</p>
                <p><span>20-30 Min</span> <span>$5.99 Deleivery Fee</span></p>
            </div>
    
            <div className='card'>
                <image></image>  
                <h4>Panda Express</h4>
                <p>$ - American - Fast Food - Chinese</p>
                <p><span>20-30 Min</span> <span>$5.99 Deleivery Fee</span></p>
            </div>
    
        </div>
    )
}

export default HomePage;