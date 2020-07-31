import Head from 'next/head'
import { useRouter } from 'next/router'
import ProductC from '../../components/categories/categories'
import Container from '../../components/Container'
import Footer from '../../components/footer'
import FilterC from '../../components/categories/filter'

const Categories = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <Container category={id}>
            <div>
                {/*<h1>Soy Categories {id}</h1>*/}
                <FilterC></FilterC>
                <ProductC/>
                <ProductC/>
                <ProductC/>
                <ProductC/>
                <ProductC/>
                <ProductC/>
                <ProductC/>
                <ProductC/>
                <ProductC/>
                <ProductC/>
                <ProductC/>
                <ProductC/>
                <Footer/>
            </div>
        </Container>
    )
}

export default Categories