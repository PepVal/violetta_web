import Link from 'next/link'
import Router from 'next/router'
import { slide as Menu } from 'react-burger-menu'


var styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '24px',
    height: '20px',
    left: '12px',
  },
  bmIcon: {
    margin: '0px',
  },
  bmBurgerBars: {
    background: '#ffffff',
    height: '2px'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0px'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    height: '100%',
    display: 'block',
  },
  bmItem: {
    display: 'block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: '0px'
  }
}

class SlideBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      logged: false,
    }
  }

  componentDidMount() {
    this.isLogin()
  }

  isLogin() {
    const data = JSON.parse(localStorage.getItem('account'))
    console.log("data nav ", data)
    if (data !== null && data.isLogin) {
      this.setState({ logged: data.isLogin })
    }
  }

  handleNav = (id) => {
    this.setState({ isOpen: true })

    Router.push('/categories/[id]', `/categories/${id}`)
    this.closeMenu()
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  render() {
    return (
      <Menu isOpen={this.state.menuOpen}
       onStateChange={(state) => this.handleStateChange(state)}>
        <h2>Tienda</h2>
        <p onClick={(e) => this.handleNav("hombre")} id="hombre" className="menu-item" >Hombre</p>
        <p onClick={(e) => this.handleNav("mujer")} id="mujer" className="menu-item" >Mujer</p>
        <p onClick={(e) => this.handleNav("niños")} id="niños" className="menu-item" >Niños</p>
        <p onClick={(e) => this.handleNav("accesorios")} id="accesorios" className="menu-item" >Accesorios</p>


        {this.state.logged
          ? <div>Mi cuenta</div>
          : <Link href="/login">
            <p className="menu-item" >Iniciar Sesión</p>
          </Link>
        }
      </Menu >

    )
  }
}

export default SlideBar