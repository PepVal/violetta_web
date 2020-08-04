const ProductC = (props) => {
    return (
        <div className="card-product">
            <div style={{ overflow: "hidden" }}>
                <img src={props.data.img} alt="Polos" style={{}} />
            </div>
            <div className="name-product">
                {/*{props.category}*/}
                <div className="color-product  scroll-horizontal">
                    {props.data.colors.map((color, id) => (<div className="cuadrado"
                        key={id} style={{ background: color.color }} />))}
                </div>
                <div className="text-small">
                    <p>
                        {props.data.name}
                    </p>
                    <p>
                        {props.data.price}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ProductC