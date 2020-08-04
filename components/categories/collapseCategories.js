const FilterC = (props) => {
    return (
        <div className="panel-group filter " >
            <div className="colapsso custom-row" >
                <svg viewBox="0 0 24 24" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <path d="M21 8H3V6H21V8M13.81 16H10V18H13.09C13.21 17.28 13.46 16.61 13.81 16M18 11H6V13H18V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"></path>
                </svg>
                <p className="font-weight-bold "data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">FILTRAR BUSQUEDA</p> 
            </div>
            <div id="collapseOne" className="container collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <ul className="colapsso custom-row">

                    <div className="col-sm-3 ">
                        <div className="input-group mb-3">
                            <div className="">
                                <label className="input-group-text " for="inputGroupSelect01">Ordenar :</label>
                            </div>
                            <select className="custom-select" >
                                <option selected>______________</option>
                                <option value="1 ">Precio</option>
                                <option value="2">Mas vendido</option>
                                <option value="3">Promocion</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-3 ">
                    <div className="input-group mb-3">
                            <div className="">
                                <label className="input-group-text" for="inputGroupSelect01">Categorias:</label>
                            </div>
                            <select className="custom-select " id="inputGroupSelect01">
                                <option selected>______________</option>
                                <option value="1">Hombre</option>
                                <option value="2">Mujer</option>
                                <option value="3">Niños</option>
                                <option value="4">Accesorios</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-3 ">
                    <div className="input-group mb-3">
                            <div className="">
                                <label className="input-group-text" for="inputGroupSelect01">Talla :</label>
                            </div>
                            <select className="custom-select " id="inputGroupSelect01">
                                <option selected>______________</option>
                                <option value="1">S</option>
                                <option value="2">M</option>
                                <option value="3">L</option>
                                <option value="4">XL</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-3 ">
                    <div className="input-group mb-3">
                            <div className="">
                                <label className="input-group-text" for="inputGroupSelect01">Color :</label>
                            </div>
                            <select className="custom-select " id="inputGroupSelect01">
                                <option selected>______________</option>
                                <option value="1">Amarillo</option>
                                <option value="2">Azul</option>
                                <option value="3">Rojo</option>
                                <option value="4">Pastel</option>
                            </select>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default FilterC