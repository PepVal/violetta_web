const ProductC = (props) => {
    return(
            <div className="card-product">
                <div>
                    <img src="https://www.grupobillingham.com/images/f3/11/7b3bb457e35c40d24726879ec024/610-460-3/polo-pique-gildan-grueso-heavy-220-barato-azul-claro.jpg" alt="Polos" />
                </div>
                <div className="name-product">
                    <p> 
                        {/*{props.category}*/}
                        Polos
                        <div className="row justify-content-md-center">
                            <div className="cuadradoce"></div>
                            <div className="cuadradove"></div>
                            <div className="cuadradoro"></div>
                            <div className="cuadradoam"></div>
                        </div>
                        $ 29.90 
                    </p>
                  
                </div>
            </div>
    )
}
export default ProductC