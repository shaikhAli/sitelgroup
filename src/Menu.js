import './Menu.css'
import Logo from './assets/logo.png'

const Menu = () => {
    return (
        <div className="manu-navigation">
            <div className="logo">
                <img src={Logo} alt='Logo' title='Logo' />
            </div>
            <div className='menu-container'> 
                <div className="menu-items">Menu1</div>
                <div className="menu-items">Menu2</div>
                <div className="menu-items">Menu3</div>
                <div className="menu-items">Menu4</div>
                <div className="menu-items">Menu5</div>
                <div className="menu-items">Menu6</div>
                <div className="menu-items">Menu7</div>
                <div className="menu-items">Menu8</div>
                <div className="menu-items">Menu9</div>
                <div className="menu-items">Menu10</div>
            </div>
        </div>
    )
}

export default Menu;