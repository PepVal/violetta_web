import React from 'react'
import fetch from 'isomorphic-fetch'

// Components
import Container from '../components/Container'
import Carousel from '../components/index/carousel'
import Category from '../components/index/category'
import Footer from '../components/footer'

const Index = (props) => {

    return (
        <Container>
            <Carousel />
            <div>
                <Category data={props.popular.male} gender={0} />
                <Category data={props.popular.female} gender={1} />
            </div>
            <Footer />
        </Container>
    )
}


Index.getInitialProps = async (ctx) => {
    const res = await fetch('https://my-json-server.typicode.com/PepVal/fake-server/popular')
    const data = await res.json()

    return {popular: data}
}

export default Index