import Router from 'next/router'

const ItemCategory = (props) => {

    const handleItemCategory = (e) => {
        // sube el scroll automaticamente :D
        document.documentElement.scrollTop = 0;
        
        Router.push('/products/[pid]', `/products/${2}`)
    }

    return (
        <div onClick={(e) => handleItemCategory(e)} className="card-item">
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