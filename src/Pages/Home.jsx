import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Homecat from '../Component/HomeCat'
import Banner from '../Component/Banner'
import SliderCat from '../Component/SliderCat'
import Offer from '../Component/Offer'
import Featuredproduct from '../Component/FeaturedProduct'
import BestSelling from '../Component/BestSelling'

function Home() {
    return (
        <>
            <Container className='home'>
                <Row>
                    <Homecat />
                    <Banner />
                </Row>
                <Row>
                    <SliderCat />
                </Row>
                <Row className='my-4'>
                    <Offer title="top-offer" />
                </Row>

                <Row className='my-5'>
                    <Featuredproduct catheading="featured products" />
                    <BestSelling catheading="best selling"/>
                    <Featuredproduct catheading="fashion" />
                    <Featuredproduct catheading="bags and travel" />
                    <Featuredproduct catheading="bedding and bath" />
                    <Featuredproduct catheading="cameras" />
                    <Featuredproduct catheading="watches sunglasses jewellery" />
                </Row>
                <Row className='my-4'>
                    <Offer title="down-offer" />
                </Row>

            </Container>
        </>
    )
}

export default Home
