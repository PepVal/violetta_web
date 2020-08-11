import { useRouter } from 'next/router'
import Head from 'next/head'
import ButtonAdd from '../../components/admin/buttonAdmin'
import TableProduct from '../../components/admin/tableProduct'
import Error404 from '../../components/categories/Error404'
import TableClient from '../../components/admin/tableClient'
import Sales from '../../components/admin/sales'
import NavbarAdmin from '../../components/admin/navbarAdmin'

const AdminDinamic = (props) => {
    const router = useRouter();
    const {aid} = router.query;

    return (
        <div>
            <Head>
            <title>Productos</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
            </Head>
            <NavbarAdmin/>
            <div >
            {   
                aid === "productos" ? 
                <div style={{margin: '0 0 20 20'}}>
                     <h2>Listado de Productos</h2>
                    <ButtonAdd/>
                    <TableProduct/>
                </div>
                :
                aid === "clientes" ?
                <div>
                    <h2>Listado de Clientes</h2>
                    <TableClient/>
                </div>
                :
                aid === "ventas"?
                <div>
                    <Sales/>
                </div>
                :
                <Error404/>
            }
            </div>
        </div>
    )
}
export default AdminDinamic;