
const CarouselProduct = ({ images }) => {

    console.log("IMAGES ", images)

    return (
        <div className="bg-carousel-product col-12 col-md-6">
            <div id="carouselProducts" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {images.map((item, id) => (
                        <li data-target="#carouselProducts" data-slide-to={id} className={id == 0 ? "active" : null} />
                    ))}
                    {/* <li data-target="#carouselProducts" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselProducts" data-slide-to="1"></li>
                    <li data-target="#carouselProducts" data-slide-to="2"></li>
                    <li data-target="#carouselProducts" data-slide-to="3"></li> */}
                </ol>
                <div className="carousel-inner">
                    {images.map((image, id) => (
                        < div className={"carousel-item " + (id == 0 ? "active" : null)} >
                            <img className="d-block w-100 product-img"
                                src={image.img} alt={image.name} />
                        </div>
                    ))}
                    {/* <div className={"carousel-item active"} >
                        <img className="d-block w-100 product-img"
                            src={images[0].img} alt={images[0].name} />
                    </div> */}

                    {/* <div className="carousel-item">
                        <img className="d-block w-100 product-img"
                            src="/img/carousel_2.svg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100 product-img"
                            src="/img/carousel_3.svg" alt="Third slide" />
                    </div> */}
                </div>
                <a className="carousel-control-prev" href="#carouselProducts" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselProducts" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div >
    )
}

export default CarouselProduct