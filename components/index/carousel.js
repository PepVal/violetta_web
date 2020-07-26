
const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://image.freepik.com/vector-gratis/personas-que-usan-aparatos-caminando-al-aire-libre-parque_81522-4108.jpg" 
                    className="d-block w-100 img-carousel" alt="oferta" />
                </div>
                <div className="carousel-item">
                    <img src="https://image.freepik.com/vector-gratis/exito-empresa-buen-concepto-trabajo-equipo_81522-3909.jpg" 
                    className="d-block w-100 img-carousel" alt="oferta" />
                </div>
                <div className="carousel-item">
                    <img src="https://image.freepik.com/vector-gratis/concepto-plano-gestion-tiempo-empresa-ti_81534-2889.jpg" 
                    className="d-block w-100 img-carousel" alt="oferta" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel