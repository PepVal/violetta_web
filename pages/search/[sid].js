import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/Container'

const Search = () => {
    const router = useRouter();
    const { sid } = router.query;

    return (
        <Container >
            <div>
                <h1>Soy Search {sid}</h1>
            </div>
        </Container>
    )
}

export default Search