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
                <img src={props.img} alt={props.category} />
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