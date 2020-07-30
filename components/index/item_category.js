
const ItemCategory = (props) => {

    const handleItemCategory = (e) => {
        alert("me diste click D:")
    }

    return (
        <div onClick={(e) => handleItemCategory} className="card-item">
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