import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import { useRouter } from 'next/router'
import ProductC from '../../components/categories/cardproduct'
import Container from '../../components/Container'
import Footer from '../../components/footer'
import FilterC from '../../components/categories/collapseCategories'
import NotFound from '../../components/search/notFound'

const Categories = (props) => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <Container category={id}>
            <div className="product-container">
                {/*<h1>Soy Categories {id}</h1>*/}
                <FilterC />
                <ul className="custom-row justify-content-center">
                    {   id ==="hombre" ? 
                        props.category.hombre.map((product,id)   => (<ProductC key={id} data={product}></ProductC>))
                        :
                        id ==="mujer"?
                        props.category.mujer.map((product,id)   => (<ProductC key={id} data={product}></ProductC>))
                        :
                        id ==="niños"?
                        props.category.niños.map((product,id)   => (<ProductC key={id} data={product}></ProductC>))
                        :
                        id ==="accesorios"?
                        props.category.accesorios.map((product,id)   => (<ProductC key={id} data={product}></ProductC>))
                        :
                        <NotFound></NotFound>
                    }
                </ul>
                <Footer/>
            </div>
        </Container>
    )
}
Categories.getInitialProps = async (ctx) => {
    const res = await fetch('https://my-json-server.typicode.com/PepVal/fake-server/category')
    const data = await res.json()

    return {category: data}
}


export default Categories