import Head from "next/head"
import Link from "next/link"

class Login extends React.Component {

    handleSignUp = (e) => {
        let btnSignUp = document.querySelector(".container-login")
        btnSignUp.classList.add("sign-up-mode");
    }

    handleSignIn = (e) => {
        let btnSignIn = document.querySelector(".container-login")
        btnSignIn.classList.remove("sign-up-mode");
    }

    render() {
        return (<>
            <Head>
                <title>Login</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script
                    src="https://kit.fontawesome.com/64d58efce2.js"
                    crossOrigin="anonymous"
                ></script>
            </Head>

            <div className="container-login">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title-login">Iniciar Sesión</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Iniciar Sesión" className="btn solid" />
                            <p className="social-text">Síguenos en nuestras redes sociales</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>

                        <form action="#" className="sign-up-form">
                            <h2 className="title-login">Registrate</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" className="btn" value="Crear Cuenta" />
                            <p className="social-text">Síguenos en nuestras redes sociales</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>¿Nuevo aqui?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" onClick={(e) => this.handleSignUp(e)} id="sign-up-btn">
                                Crear cuenta
                            </button>
                        </div>
                        <img src="log.svg" className="image" alt="" />
                    </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <h3>¿Tienes cuenta?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="btn transparent" onClick={(e) => this.handleSignIn(e)} id="sign-in-btn">
                                Inicia Sesión
                            </button>
                        </div>
                        <img src="register.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Login