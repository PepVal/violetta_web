
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
                    <img src="/img/carousel_1.svg" 
                    className="d-block w-100 img-carousel" alt="oferta" />
                </div>
                <div className="carousel-item">
                    <img src="/img/carousel_2.svg"
                    className="d-block w-100 img-carousel" alt="oferta" />
                </div>
                <div className="carousel-item">
                    <img src="/img/carousel_3.svg" 
                    className="d-block w-100 img-carousel" alt="oferta" />
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