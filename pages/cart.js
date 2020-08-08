import Head from 'next/head'

import Container from '../components/Container'
import Footer from '../components/footer'

import EmptyCart from '../components/cart/emptyCart'
import ItemCart from '../components/cart/itemCart'

class Cart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            subtotal: 0
        }
    }

    componentDidMount() {
        this.loadCart();
    }

    loadCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart !== null) {
            let subt = this.getSubtotal(cart.items)
            this.setState({ items: cart.items, subtotal: subt})
        } else {
            this.setState({ items: [] })
        }
    }

    getSubtotal = (array) => {
        let total = 0;
        array.forEach(element => {
            total += element.total
        });
        return total.toFixed(2);
    }

    render() {
        const { items, subtotal } = this.state;
        console.log("RENDER", items)
        return (
            <Container>
                <Head>
                    <title>Carrito</title>
                </Head>

                <div className="cart-title">
                    <h1>Carrito de compra</h1>
                </div>

                <div className="cart-body">
                    {items.length !== 0
                        ? items.map((product, id) => (
                            <ItemCart data={product} key={id} />
                        ))
                        : <EmptyCart />
                    }
                </div>

                <div className="cart-end">
                    <div className="cart-subtotal">
                        <h2>Subtotal</h2>
                        <p>${subtotal}</p>
                    </div>

                    <div className="cart-buttons">
                        <button>Seguir Comprando</button>
                        <button>Finalizar Compra</button>
                    </div>
                </div>

                <Footer />
            </Container>
        )
    }
}

// Cart.getInitialProps = async (ctx) => {
//     const cart = JSON.parse(window.localStorage.getItem('cart')) || []
//     console.log("Items madafoka",cart)
//     return { items: null }
// }

export default Cart