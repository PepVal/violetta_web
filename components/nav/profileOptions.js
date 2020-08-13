import Link from 'next/link'
import Router, { useRouter } from 'next/router'

//Hay que cambiar los a con la etique Link para que no recarge la pagina completa 

const ProfileOptions = (props) => {

    const logout = () => {
        const data = JSON.parse(localStorage.getItem('account'))
        data.isLogin = false;

        const user = JSON.stringify(data)

        console.log(user)

        localStorage.setItem('account', user)
        Router.reload();
    }

    const handleProfile = (e) => {
        Router.push("/account")
    }

    const handleHistory = (e, id) => {
        Router.push("/account/[acid]", `/account/${id}`)
    }

    return (
        <div className="dropdown">
            <img id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" alt="Imagen de perfil" />

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <p onClick={(e) => handleProfile(e)} className="dropdown-item" >Perfil</p>
                <p onClick={(e) => handleHistory(e, "history")} className="dropdown-item"  >Historial</p>
                <div className="dropdown-divider" />
                <a onClick={logout} className="dropdown-item" href="">Cerrar sesión</a>
            </div>
        </div>
    )
}

export default ProfileOptions