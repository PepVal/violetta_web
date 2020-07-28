import Link from 'next/link'
import Router, { useRouter } from 'next/router'

//Hay que cambiar los a con la etique Link para que no recarge la pagina completa 

const ProfileOptions = (props) => {

    return (
        <div className="dropdown">
            <img type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" alt="Profile" />

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Historial</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">Cerrar sesión</a>
            </div>
        </div>
    )
}

export default ProfileOptions