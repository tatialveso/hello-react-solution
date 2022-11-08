import logo from '../../images/ironhack-logo-xs.png';
import menu from '../../images/menu-top-xs.png';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <img src={ logo } alt="" />
            <img className='menu' src={ menu } alt="" />
        </nav>
    )
}

export default Nav