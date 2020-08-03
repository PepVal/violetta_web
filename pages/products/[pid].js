import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/Container'
import Footer from '../../components/footer'
import CarouselProduct from '../../components/products/carouselProduct'
import Description from '../../components/products/description'
import RelatedProducts from '../../components/products/relatedProducts'

const Products = () => {
    const router = useRouter();
    const { pid } = router.query;

    return (
        <Container >
            <Head>
                <title> {pid}</title>
            </Head>
            <div className="product">
                <CarouselProduct />
                <Description />
            </div>
            <div>
                <RelatedProducts/>
            </div>
            <Footer />
        </Container>
    )
}

export default Products