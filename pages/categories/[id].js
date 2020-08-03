import Head from 'next/head'
import { useRouter } from 'next/router'
import ProductC from '../../components/categories/cardproduct'
import Container from '../../components/Container'
import Footer from '../../components/footer'
import FilterC from '../../components/categories/collapseCategories'

const Categories = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <Container category={id}>
            <div className="product-container">
                {/*<h1>Soy Categories {id}</h1>*/}
                <FilterC />
                <ul className="custom-row justify-content-center">
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
                </ul>
                <Footer/>
            </div>
        </Container>
    )
}

export default Categories