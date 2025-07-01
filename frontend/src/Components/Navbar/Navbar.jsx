import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import logo from '../Assets/logo.PNG'
import cart_icon from '../Assets/cart.PNG'
import nav_dropdown from '../Assets/dropdown.PNG'
const Navbar = () => {

    const [menu, setMenu] = React.useState("home");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = React.useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo'/>
                <p>MOONLIGHT JOURNALS</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt='dropdown' />
            <ul ref={menuRef}className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>} </li>
                <li onClick={()=>{setMenu("holo")}}><Link style={{textDecoration: 'none'}} to='/holo'>Holographic Journals</Link>{menu==="holo"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("std")}}><Link style={{textDecoration: 'none'}} to='/std'>Standard Journals</Link>{menu==="std"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("patt")}}><Link style={{textDecoration: 'none'}} to='/patt'>Pattern Journals</Link>{menu==="patt"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("com2")}}><Link style={{textDecoration: 'none'}} to='/com2'>Combo of 2</Link>{menu==="com2"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("com3")}}><Link style={{textDecoration: 'none'}} to='/com3'>Combo of 3 or more</Link>{menu==="com3"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt='cart'/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;