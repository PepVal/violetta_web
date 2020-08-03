import ProductC from '../categories/cardproduct'

const RelatedProducts = () => {
    return (
        <div>
            <div className="title-related-products">
                <h3>Productos relacionados</h3>
                <div className="line-complete" />
            </div>
            
            <div className="scroll-horizontal" style={{padding: "8px"}}>
                <div style={{display: "inline-block"}}>
                    <ProductC/>
                </div>
                <div style={{display: "inline-block"}}>
                    <ProductC/>
                </div>
                <div style={{display: "inline-block"}}>
                    <ProductC/>
                </div>
                <div style={{display: "inline-block"}}>
                    <ProductC/>
                </div>
                <div style={{display: "inline-block"}}>
                    <ProductC/>
                </div>
                <div style={{display: "inline-block"}}>
                    <ProductC/>
                </div>
            </div>
        </div>
    )
}

export default RelatedProducts