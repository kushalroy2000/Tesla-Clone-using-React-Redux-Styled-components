import React from 'react'
import styled from 'styled-components'
import { Section } from './Section'

export const Home = () => {
    return (
        <Container>
            <Section
                title="Model S"
                des="Order Online for Touchless Delivery"
                backImg="model-s.jpg"
                LeftButton="Custom Order"
                RightButton="Existing Inventory"
            />
            <Section
                title="Model Y"
                des="Order Online for Touchless Delivery"
                backImg="model-y.jpg"
                LeftButton="Custom Order"
                RightButton="Existing Inventory"
            />
            <Section
                title="Model X"
                des="Order Online for Touchless Delivery"
                backImg="model-x.jpg"
                LeftButton="Custom Order"
                RightButton="Existing Inventory"
            />
            <Section
                title="Model 3"
                des="Order Online for Touchless Delivery"
                backImg="model-3.jpg"
                LeftButton="Custom Order"
                RightButton="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                des="Money Back Guarantee"
                backImg="solar-panel.jpg"
                LeftButton="Order Now"
                RightButton="Learn More"
            />
            <Section
                title="Solar for New Roofs"
                des="Solar Roof Costs less than a New Roof Plus Solar Panels"
                backImg="solar-roof.jpg"
                LeftButton="Order Now"
                RightButton="Learn More"
            />
            <Section
                title="Accessories"
                des=""
                backImg="accessories.jpg"
                LeftButton="Shop Now"
            />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;

`
