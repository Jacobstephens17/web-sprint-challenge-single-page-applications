import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Pizza from './Assets/Pizza.jpg'


const StyledHeader = styled.div`
display:flex;
align-items:center;
justify-content:left;
margin-left:3rem;
`
const StyledLinks = styled.div`
justify-content:space-evenly;
border:1px black solid;
padding:.3rem;

`
const StyledNav = styled.nav`
display:flex;
margin-left:40rem;
`

const StyledTitle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const StyledCards = styled.div`
display:flex;
flex:wrap;
`
const StyledCard = styled.div`
padding:1.5rem 2rem;
margin:2rem;
border:black 1px solid;
`

function HomePage(props){

    return (

        <div>
            <StyledHeader className="header">
        
                <h1>Lambda Eats</h1>

            <StyledNav>
                    <StyledLinks>
                        <button to='/'> Home</button>
                    </StyledLinks>
                    <StyledLinks>
                        <button>Help</button>
                    </StyledLinks>
                </StyledNav>

            </StyledHeader>
    
            <StyledTitle>
    
                <p>Your Favorite food, delivered while coding</p>
    
                <Link id="submit" to='/PizzaBuilder'>Pizza?</Link>
        
            </StyledTitle>
    
        
            <h2>Food delivery in Gotham City</h2>
        
            <StyledCards>

                <StyledCard>
                    <image></image>  
                    <h4>McDonald's</h4>
                    <p>$ - American - Fast Food - Burgers</p>
                    <p><span>20-30 Min</span> <span>$5.99 Deleivery Fee</span></p>
                </StyledCard>
    
                <StyledCard>
                    <image></image>  
                    <h4>Canes</h4>
                    <p>$ - American - Fast Food - Chicken</p>
                    <p><span>20-30 Min</span> <span>$5.99 Deleivery Fee</span></p>
                </StyledCard>
    
                <StyledCard>
                    <image></image>  
                    <h4>Burger King</h4>
                    <p>$ - American - Fast Food - Burgers</p>
                    <p><span>20-30 Min</span> <span>$5.99 Deleivery Fee</span></p>
                </StyledCard>
    
                <StyledCard>
                    <image></image>  
                    <h4>Panda Express</h4>
                    <p>$ - American - Fast Food - Chinese</p>
                    <p><span>20-30 Min</span> <span>$5.99 Deleivery Fee</span></p>
                </StyledCard>
            </StyledCards>
    
        </div>
    )
}

export default HomePage;