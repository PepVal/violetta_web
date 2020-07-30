import Link from 'next/link'
import Router, { useRouter } from 'next/router'

import ProfileOptions from './profileOptions'
import SlideBar from './slideBar'

class Navigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            logged: false,
            category: null
        }
    }

    componentDidMount() {
        this.setState({ category: this.props.category })
        // if(this.props.id != undefined){
        //     this.setState({category: this.props.id})
        // }
    }

    handleNav = (cat) => {
        this.setState({ category: cat })
        // Router.push('/categories/[id]', `/categories/${category}`)

        // console.log("ACTIVEEEE ", this.state.active)
        this.selectNav(cat)
    }

    selectNav = (id) => {
        Router.push('/categories/[id]', `/categories/${id}`)
    }

    search(e) {
        e.preventDefault()
        const item_search = document.getElementById('search').value
        console.log("Busca esto: ", item_search)
        alert('la busqueda es: ' + item_search)
        Router.push('/search/[sid]', `/search/${item_search}`)
    }

    searchCollapse(e){
        e.preventDefault()
        const item_search = document.getElementById('iSearchCollapse').value
        console.log("Busca esto: ", item_search)
        alert('la busqueda es: ' + item_search)
        Router.push('/search/[sid]', `/search/${item_search}`)
    }

    handleOpenSlide() {

    }

    render() {
        return (
            <header className="navBar align-items-center">
                <div className="toogle-icon">
                    {/* <img onClick={() => this.handleOpenSlide()} src="/toogle_button.svg" alt="Menu" /> */}
                    <SlideBar />
                </div>

                <div className="title">
                    <h2>
                        <Link href="/">
                            <a>Violetta</a>
                        </Link>
                    </h2>
                </div>
                <ul className="items-group justify-content-center" role="navigation">
                    <li onClick={() => this.handleNav("hombre")}>
                        <a className={"" + (this.state.category === "hombre" ? 'active' : '')}>HOMBRE</a>
                    </li>
                    <li onClick={() => this.handleNav("mujer")} >
                        <a className={(this.state.category === "mujer" ? 'active' : '')}>MUJER</a>
                    </li>
                    <li onClick={() => this.handleNav("niños")} >
                        <a className={(this.state.category === "niños" ? 'active' : '')}>NIÑOS</a>
                    </li>
                    <li onClick={() => this.handleNav("accesorios")} >
                        <a className={(this.state.category === "accesorios" ? 'active' : '')}>ACCESORIOS</a>
                    </li>
                </ul>
                <div className="input-search">
                    <form onSubmit={(e) => this.search(e)}>
                        <input id="search" placeholder="Buscar" aria-label="Buscar prenda" />
                    </form>
                </div>
                <div className="nav-icons">
                    <div className="search-icon">
                        <img type="button" data-toggle="collapse" data-target="#searchCollapse"
                            aria-expanded="false" aria-controls="searchCollapse"
                            src="/buscar.svg" alt="Buscar" />
                    </div>
                    <div className="cart-icon">
                        <Link href="/cart">
                            <img src="/cart.svg" alt="Carrito" />
                        </Link>
                    </div>

                    <div className="login-icon">
                        {this.state.logged
                        ?   <ProfileOptions />
                        :   <Link type="button" href="/login">
                                <img src="/user.svg" alt="Perfil" />
                            </Link>
                        }
                    </div>
                </div>
                <div className="collapse" id="searchCollapse" style={{ position: "absolute", top: "50px", left: "0px", right: "0px", zIndex: 2000 }}>
                    <div className="card card-body">
                        <form onSubmit={(e) => this.searchCollapse(e)}>
                            <input id="iSearchCollapse" placeholder="Buscar en nuestra tienda" aria-label="Buscar prenda" />
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navigation