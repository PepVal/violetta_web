import React from 'react'

// Components
import Container from '../components/Container'
import Carousel from '../components/index/carousel'
import Category from '../components/index/category'
import Footer from '../components/footer'

const Index = () => {
    return (
        <Container>
            <Carousel />
            <div>
                <Category gender={0} />
                <Category gender={1} />
            </div>
            <Footer />
        </Container>
    )
}

export default Index