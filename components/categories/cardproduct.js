const ProductC = (props) => {
    return(
            <div className="card-product">
                <div style={{overflow: "hidden"}}>
                    <img src="https://cdn.shopify.com/s/files/1/0052/6503/1286/products/31872_01_f54fdf33-be97-4799-afba-a49db56849ea.jpg" alt="Polos" />
                </div>
                <div className="name-product">
                    {/*{props.category}*/}
                    <div className="color-product  scroll-horizontal">
                        <div className="cuadradoce cuadrado"></div>
                        <div className="cuadradove cuadrado"></div>
                        <div className="cuadradoro cuadrado"></div>
                        <div className="cuadradoam cuadrado"></div>
                        <div className="cuadradomo cuadrado"></div>
                        <div className="cuadradogri cuadrado"></div>
                        <div className="cuadradoaz cuadrado"></div>
                        <div className="cuadradoce cuadrado"></div>
                        <div className="cuadradove cuadrado"></div>
                    </div>
                    <div className= "text-small">
                        <p>
                            Polo Edicion Primavera
                        </p>
                        <p>
                            $ 29.90 
                        </p>
                    </div>
                </div>
            </div>
    )
}
export default ProductC