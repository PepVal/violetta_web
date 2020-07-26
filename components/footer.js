
const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row col-md">
                    <div className="info-block">
                        <h4>Condiciones de uso</h4>
                        <p>Política de privacidad</p>
                        <p>Terminos y condiciones</p>
                        <p>Aviso legal</p>
                        <p>Política de cookies</p>
                    </div>
                    <div className="info-block">
                        <h4>Contactos</h4>
                        <p>contact@violetta.com</p>
                        <p>Horario de atencion al cliente:</p>
                        <p>Lunes a Sabado de 09:00h a 20:00h</p>
                    </div>
                    <div className="info-block">
                        <h4>Redes sociales</h4>
                        <div className="row">
                            <img src="/whatsapp.svg" alt="whatsapp" />
                            <img src="/facebook.svg" alt="facebook" />
                            <img src="/instagram.svg" alt="instagram" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="credit">
                <div className="line-credit" />
                <div className="credits">
                    <p>Copyright ©2020 Violetta.</p>
                    <p>Powered by PepVal Apps</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer