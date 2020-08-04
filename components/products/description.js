
class Description extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: "NA",
        }
    }

    handleSize = (e, size) => {
        e.preventDefault()
        this.setState({ isChecked: size })
    }

    handleBuy = () => {
        alert("COMPRAR")
    }

    handleAddCart = () => {
        alert("AÑADIR A CARRITO")
    }

    render() {
        const { isChecked } = this.state
        const { name, price, colors, description } = this.props
        return (
            <div className="col-12 col-md-6 description-container">
                <h2>{name}</h2>

                <div className="d-flex justify-content-between">
                    <div className="count-input">
                        <p className="bold">Cantidad: </p>
                        <input type="number" placeholder="1" defaultValue="1"
                            min="1" max="99" aria-valuemax="99" aria-valuemin="1" aria-label="Cantidad de Ropa" />
                    </div>
                    <p className="bold">Precio: ${price}</p>
                </div>
                <div className="colors">
                    <p className="bold">Colores:</p>
                </div>
                <div className="clothes-size">
                    <p className="bold">Tallas:</p>
                    <ul>
                        <li>
                            <input type="radio" value="S" id="size-s" readOnly checked={isChecked === "S"} />
                            <label onClick={(e) => this.handleSize(e, "S")} htmlFor="size-s">S</label>
                        </li>
                        <li>
                            <input type="radio" value="M" id="size-m" readOnly checked={isChecked === "M"} />
                            <label onClick={(e) => this.handleSize(e, "M")} htmlFor="size-m">M</label>
                        </li>
                        <li>
                            <input type="radio" value="L" id="size-l" readOnly checked={isChecked === "L"} />
                            <label onClick={(e) => this.handleSize(e, "L")} htmlFor="size-l">L</label>
                        </li>
                        <li>
                            <input type="radio" value="XL" id="size-xl" readOnly checked={isChecked === "XL"} />
                            <label onClick={(e) => this.handleSize(e, "XL")} htmlFor="size-xl">XL</label>
                        </li>
                        <li>
                            <input type="radio" value="3XL" id="size-3xl" readOnly checked={isChecked === "3XL"} />
                            <label onClick={(e) => this.handleSize(e, "3XL")} htmlFor="size-3xl">3XL</label>
                        </li>
                        <li>
                            <input type="radio" value="4XL" id="size-4xl" readOnly checked={isChecked === "4XL"} />
                            <label onClick={(e) => this.handleSize(e, "4XL")} htmlFor="size-4xl">4XL</label>
                        </li>
                    </ul>
                </div>
                <div className="clothes-description">
                    <p className="bold">Descripción:</p>
                    <p className="text-description">{description}</p>
                </div>
                <div className="clothes-buttons">
                    <p style={{display: isChecked === "NA" ? "block" : "none"}}>Debes seleccionar una talla antes de comprar o añadir al carrito</p>
                    <div>
                        <button onClick={(e) => this.handleBuy()} disabled={isChecked === "NA"}>COMPRAR YA</button>
                    </div>
                    <div>
                        <button onClick={(e) => this.handleAddCart()} disabled={isChecked === "NA"}>AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Description