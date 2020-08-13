
const Carousel = () => {
    return (
        <div id="carouselIndicators" className="carousel slide bg-carousel" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active"/>
                <li data-target="#carouselIndicators" data-slide-to="1"/>
                <li data-target="#carouselIndicators" data-slide-to="2"/>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg" 
                    className="d-block w-100 img-carousel" alt="Producto destacado" />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2015/03/26/10/07/young-690958_960_720.jpg"
                    className="d-block w-100 img-carousel" alt="Producto destacado" />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2017/08/01/11/48/blue-2564660_960_720.jpg" 
                    className="d-block w-100 img-carousel" alt="Producto destacado" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel