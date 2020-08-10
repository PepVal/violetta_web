const RowClient = (props) => {
    return (
        <tr>
            {/*<th scope="row">{props.name}</th>*/}
            <td>
                <img class="img-thumbnail"  alt=""  src={props.image} >
                </img>
            </td>
            <td >{props.name} </td>
            <td> {props.filname}</td>
            <td>{props.correo}</td>
            <td>{props.ciudad}</td>
            <td>{props.estado}</td>
        </tr>
    );
};
export default RowClient;