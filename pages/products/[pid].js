import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/Container'
import Footer from '../../components/footer'

const Products = () => {
    const router = useRouter();
    const { pid } = router.query;

    return (
        <Container >
            <Head>
                <title>Producto</title>
            </Head>
            <div>
                <div>
                    <img src="log.svg" alt="" />
                </div>
                <div>
                    datos
                </div>

            </div>
            <Footer />
        </Container>
    )
}

export default Products