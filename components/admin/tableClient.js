import RowClient from '../../components/admin/rowClient'
const TableClient = (props) => {
    return (
        <div className="table-responsive" style={{marginTop: '20px'}}>
            <table className="table" >
                <thead alt="cabecera de la tabla">
                    <tr>
                        <th scope="col">Foto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <RowClient image={"https://i.pinimg.com/originals/8f/54/a5/8f54a5fc0fd17e1ccd35bf5229f153d9.jpg"}
                        name={"Fernanda Cristhina"} filname={"Galarza Alvarado"} correo={"fgalarza@gmail.com"} ciudad={"Esmeralas"} estado={"Activo"}>
                    </RowClient>
                    <RowClient image={"https://cdni.rbth.com/rbthmedia/images/2018.03/article/5abe5be015e9f91a63325202.jpg"}
                        name={"Luisa Maria"} filname={"Olaya Aparicio "}correo={"lolaya@gmail.com"} ciudad={"Atacames"} estado={"Activo"}>
                    </RowClient>
                    <RowClient image={"https://i.pinimg.com/564x/0e/7b/d4/0e7bd4e2a3ad316f7edd426063ec779e.jpg"}
                        name={"Thania Cindy"} filname={"Romero Pacheco "}correo={"lolaya@gmail.com"} ciudad={"Sua"} estado={"Desconectada"}>
                    </RowClient>
                </tbody>
            </table>
        </div>
    )
};
export default TableClient;