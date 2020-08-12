import Head from 'next/head'
import { useRouter } from 'next/router'

import fetch from 'isomorphic-fetch'

import Container from '../../components/Container'
import Footer from '../../components/footer'

import ProductC from '../../components/categories/cardproduct'
import FilterC from '../../components/categories/collapseCategories'
import Error404 from '../../components/categories/Error404'

const Categories = (props) => {
    const router = useRouter();
    const { id } = router.query;

    try {
        // sube el scroll automaticamente :D
        document.documentElement.scrollTop = 0;
    } catch (error) {
        console.log(error)
    }

    return (
        <Container category={id}>
            <Head>
                <title>Categoria: {id}</title>
            </Head>

            <div className="product-container">
                {/*<h1>Soy Categories {id}</h1>*/}
                <FilterC />
                <ul className="custom-row justify-content-center">
                    {id === "hombre" ?
                        props.category.hombre.map((product, id) => (<ProductC key={id} data={product} />))
                        :
                        id === "mujer" ?
                            props.category.mujer.map((product, id) => (<ProductC key={id} data={product} />))
                            :
                            id === "niños" ?
                                props.category.niños.map((product, id) => (<ProductC key={id} data={product} />))
                                :
                                id === "accesorios" ?
                                    props.category.accesorios.map((product, id) => (<ProductC key={id} data={product} />))
                                    :
                                    <Error404 />
                    }
                </ul>
            </div>
            <Footer />
        </Container>
    )
}
Categories.getInitialProps = async (ctx) => {
    const res = await fetch('https://my-json-server.typicode.com/PepVal/fake-server/category')
    const data = await res.json()

    return { category: data }
}


export default Categories