import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
    return (
        <Container>
            <Section 
            title= "Model S"
             description = "Order Online for TouchLess delivery" 
             backgroundImage ="model-s.jpg"
                 leftBtnText = "Custom Order"
                 rightBtnText = "Existing Inventory"
             />

            <Section
                title= "Model Y"
             description = "Order Online for TouchLess delivery" 
             backgroundImage ="model-y.jpg"
                 leftBtnText = "Custom Order"
                 rightBtnText = "Existing Inventory"
            />
            <Section
                title= "Model 3"
             description = "Order Online for TouchLess delivery" 
             backgroundImage ="model-3.jpg"
                 leftBtnText = "Custom Order"
                 rightBtnText = "Existing Inventory"
            />
            <Section
                title= "Model X"
             description = "Order Online for TouchLess delivery" 
             backgroundImage ="model-x.jpg"
                 leftBtnText = "Custom Order"
                 rightBtnText = "Existing Inventory"
            />  
            <Section
                title= "Lowest Cost Solar Panels in America"
             description = "Money back guarantee" 
             backgroundImage ="solar-panel.jpg"
                 leftBtnText = "Custom Order"
                 rightBtnText = "Learn More"
            />  
             <Section
                title= "Solar for new Roofs"
             description = "Solar Roofs cost less than a new Roof plus Solar Panels" 
             backgroundImage ="solar-roof.jpg"
                 leftBtnText = "Custom Order"
                 rightBtnText = "Learn More"
            />  
              <Section
                title= "Acessories"
             description = "" 
             backgroundImage ="accessories.jpg"
                 leftBtnText = "Custom Order"
                //  rightBtnText = "Learn More"
            />  
           
        </Container>
    )
}

export default Home


const Container = styled.div`

height: 100vh;


`;