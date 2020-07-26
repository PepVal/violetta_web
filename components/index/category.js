import ItemCategory from './item_category'

const Category = (props) => {
    return (
        <div className="container-category">
            <h1>{props.gender == 0 ? "Para él": "Para ella"}</h1>
            <div className="scroll-horizontal">
                <ItemCategory category={"Polos"}/>
                <ItemCategory category={"Bermudas"}/>
                <ItemCategory category={"Pantalones"}/>
                <ItemCategory category={"Gorras"}/>
                <ItemCategory category={"Polo"}/>
            </div>
        </div>
    )
}

export default Category