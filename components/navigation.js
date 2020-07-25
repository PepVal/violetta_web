import Link from 'next/link'
import Router from 'next/router'

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

    search(e){
        e.preventDefault()
    }

    render() {
        const { active } = this.state;
        return (
            <header className="navBar align-items-center">
                <div></div>
                <div>
                    <h2 className="title">
                        <Link href="/">
                            <a>Violetta</a>
                        </Link>
                    </h2>
                </div>
                <ul className="items-group">
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
                        <input placeholder="Buscar" />
                    </form>
                </div>
                <div className="nav-icons">
                    <Link href="/cart">
                        <img src="/cart.svg" alt="Carrito" />
                    </Link>
                    <Link href="/login">
                        <img src="/user.svg" alt="Perfil" />
                    </Link>
                </div>
            </header>
        )
    }
}

export default Navigation