
const ItemCategory = (props) => {
    return (
        <div className="card-item">
            <div>
                <img src="https://image.freepik.com/vector-gratis/permanecer-casa-ilustracion-concepto_23-2148479211.jpg" alt="Polos" />
            </div>
            <div className="name-category">
                <p>
                    {props.category}
                </p>
            </div>
        </div>
    )
}

export default ItemCategory