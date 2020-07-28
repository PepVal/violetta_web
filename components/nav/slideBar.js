import { slide as Menu } from 'react-burger-menu'


var styles = {
    bmBurgerButton: {
      position: 'relative',
      width: '36px',
      height: '30px',
      left: '16px',
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
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
      top: '0px'
    }
  }

class SlideBar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
        }
    }

    showSettings = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <Menu styles={styles}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
            </Menu >
        )
    }

}

export default SlideBar