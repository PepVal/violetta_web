import Link from 'next/link'
import Router, { useRouter } from 'next/router'
const Navbar = () => {

    const handleNav=(product)=>{
        Router.push('/admin/[id]', `/admin/${product}`)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="col-4" >
                <Link href="/admin">
                    <a className="navbar-brand" >Administrador</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse " id="navbarNavDropdown" >
                <ul className="navbar-nav d-flex justify-content-between" style={{width: '100%'}}>
                    
                    <div className=" ">
                        <li className="nav-item active" onClick={() => handleNav("productos")}>
                            <a className=" nav-link " href="#">
                                Productos 
                                    <span class="sr-only">(current)</span>
                                </a>
                        </li>
                    </div>

                    <div className=" ">
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Clientes</a>
                        </li>
                    </div>

                    <div className=" ">
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Ventas</a>
                        </li>
                    </div>
                    <div>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Opciones ...
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Historial</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Configuraciom</a>
                            </div>
                        </li>
                    </div>

                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
