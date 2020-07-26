import Link from 'next/link'
import Router, { useRouter } from 'next/router'

class Navigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            active: -1,
        }
    }

    handleNav = (op) => {
        console.log(op)
        switch (op) {
            case 0:
                Router.push('/categories/[id]', '/categories/hombre')
                this.setState({ active: 0 })
                break;
            case 1:
                Router.push('/categories/[id]', '/categories/mujer')
                this.setState({ active: 1 })
                break;
            case 2:
                Router.push('/categories/[id]', '/categories/niños')
                this.setState({ active: 2 })
                break;
            case 3:
                Router.push('/categories/[id]', '/categories/accesorios')
                this.setState({ active: 3 })
                break;
            default:
                this.setState({ active: -1 })
        }
    }

    selectNav = (id) => {
        switch (id) {

        }
    }

    search(e) {
        e.preventDefault()
        const item_search = document.getElementById('search').value
        console.log("Busca esto: ", item_search)
        alert('la busqueda es: ' + item_search)
    }

    render() {
        const { active } = this.state;
        return (
            <header className="navBar align-items-center">
                <div className="toogle-icon">
                    <img src="/toogle_button.svg" alt="Menu" />
                </div>

                <div className="title">
                    <h2 >
                        <Link href="/">
                            <a>Violetta</a>
                        </Link>
                    </h2>
                </div>
                <ul className="items-group justify-content-center">
                    <li onClick={(e) => this.handleNav(0)}>
                        <a className={active == 0 ? "active" : ""}>HOMBRE</a>
                    </li>
                    <li onClick={(e) => this.handleNav(1)}>
                        <a className={active == 1 ? "active" : ""}>MUJER</a>
                    </li>
                    <li onClick={(e) => this.handleNav(2)}>
                        <a className={active == 2 ? "active" : ""}>NIÑOS</a>
                    </li>
                    <li onClick={(e) => this.handleNav(3)}>
                        <a className={active == 3 ? "active" : ""}>ACCESORIOS</a>
                    </li>
                </ul>
                <div className="input-search">
                    <form onSubmit={(e) => this.search(e)}>
                        <input id="search" placeholder="Buscar" />
                    </form>
                </div>
                <div className="nav-icons">
                    <div className="search-icon">
                        <img src="/buscar.svg" alt="Buscar" />
                    </div>
                    <div className="cart-icon">
                        <Link href="/cart">
                            <img src="/cart.svg" alt="Carrito" />
                        </Link>
                    </div>
                    <div className="login-icon">
                        <Link href="/login">
                            <img src="/user.svg" alt="Perfil" />
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navigation