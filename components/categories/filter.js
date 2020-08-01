const FilterC = (props) => {
    return (
        <div className="panel-group filter ">
            <div className=" ">
                    <div className="colapsso row"data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <svg viewBox="0 0 24 24">
                            <path d="M21 8H3V6H21V8M13.81 16H10V18H13.09C13.21 17.28 13.46 16.61 13.81 16M18 11H6V13H18V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"></path>
                        </svg>
                        <p className="font-weight-bold ">FILTRAR BUSQUEDA</p> 
                    </div>
                <div id="collapseOne" className="container collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className=" row colapsso ">
                        <div className="col-sm-3 ">Mas vendidas</div>
                        <div className="col-sm-3 ">Color</div>
                        <div className="col-sm-3 ">Talla</div>
                        <div className="col-sm-3 ">Categorias</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterC