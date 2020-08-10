const RowProduct = (props) => {
    return (
        <tr>
            <th scope="row">{props.lot}</th>
            <td>
                <svg viewBox="0 0 24 24" className="svg">
                    <path d={props.icon} />
                </svg>
            </td>
            <td>{props.name} </td>
            <td>{props.price}</td>
            <td>
                {props.state}
            </td>
            <td>
                <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Editar
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Ingresar</a>
                        <a class="dropdown-item" href="#">Modificarn</a>
                        <a class="dropdown-item" href="#">Sacar de stock</a>
                    </div>
                </div>
            </td>
        </tr>
    );
};
export default RowProduct; 