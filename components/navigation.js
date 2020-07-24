import Link from 'next/link'
import Router from 'next/router'

const Navigation = () => {

    return (
        <ul className="row align-items-center justify-content-around navBar">
            <div>
                <h2>
                    <Link href="/">
                        Violetta
                    </Link>
                </h2>
            </div>
            <div className="row justify-content-around">
                <li onClick={(e) => Router.push('/categories/[id]', '/categories/hombre') }>
                    Hombre
                </li>
                <li onClick={(e) => Router.push('/categories/[id]', '/categories/mujer') }>
                    Mujer
                </li>
                <li onClick={(e) => Router.push('/categories/[id]', '/categories/niños') }>                    
                    Niños
                </li>
                <li onClick={(e) => Router.push('/categories/[id]', '/categories/accesorios') }>
                    Accesorios
                </li>
            </div>
            <div>
                <input/>
            </div>
            <div>
                <Link href="/cart">
                    <img src="/cart.svg" alt="Carrito" />
                </Link>
                <Link href="/login">
                    <img src="/user.svg" alt="Perfil" />
                </Link>
            </div>
        </ul>
    )
}

export default Navigation