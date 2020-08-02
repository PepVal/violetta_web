import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/Container'
import NotFound from '../../components/search/notFound';
import SearchProduct from '../../components/search/searchProduct'
import Footer from '../../components/footer'

const Search = () => {
    const router = useRouter();
    const { sid } = router.query;

    return (
        <Container >
            <Head>
                <title> {sid}</title>
            </Head>
            <div className="header-search">
                <h1>Buscar</h1>
                <div className="line" />
            </div>
            {sid === "pizza"
            ? <NotFound searchTerm={sid} />
            : <SearchProduct />
            }
            <Footer />
        </Container>
    )
}

export default Search