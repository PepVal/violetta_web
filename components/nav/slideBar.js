import Link from 'next/link'
import Router from 'next/router'
import { slide as Menu } from 'react-burger-menu'


var styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '36px',
    left: '12px',
  },
  bmIcon: {
    margin: '0px',
  },
  bmBurgerBars: {
    background: '#ffffff',
    height: '4px'
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
      isOpen: false,
    }
  }

  handleNav = (id) => {
    this.setState({isOpen: true})

    Router.push('/categories/[id]', `/categories/${id}`)
  }

  render() {
    return (
      <Menu customBurgerIcon={<img src="toogle_button.svg" />} styles={styles} onClose={this.state.isOpen}>
        <h2>Tienda</h2>
        <p onClick={(e) => this.handleNav("hombre")} id="hombre" className="menu-item" >HOMBRE</p>
        <p onClick={(e) => this.handleNav("mujer")} id="mujer" className="menu-item" >MUJER</p>
        <p onClick={(e) => this.handleNav("niños")} id="niños" className="menu-item" >NIÑOS</p>
        <p onClick={(e) => this.handleNav("accesorios")} id="accesorios" className="menu-item" >ACCESORIOS</p>

        <Link href="/login">
          <a type="button" id="login" className="menu-item" >Iniciar Sesión</a> 
        </Link>
      </Menu >
    )
  }
}

export default SlideBar