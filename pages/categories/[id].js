import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from '../../components/Container'


const Categories = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <Container>
            <div>
                <h1>Soy Categories {id}</h1>
            </div>
        </Container>
    )
}

export default Categories