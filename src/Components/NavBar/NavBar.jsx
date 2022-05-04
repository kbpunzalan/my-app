import React from 'react';
import './navbar.css';
import logo from './pics/logo.png'

class NavBar extends React.Component {
    render() {
        return(
        <div className='navbar-container'>
            <a href='https://about.facebook.com/meta/'><img src={logo} alt="logo" /></a>
            <a href='https://about.facebook.com/meta/'><div className='item1'> METUH </div></a>
            <a href='https://www.facebook.com/'><div className='item2'> PEYSBUK </div></a>
            <a href='https://drive.google.com/file/d/1pB_G_qjgcMNjVfrasXFrSJvA_Yvt1m7g/view?usp=sharing'><div className='item3'> ABOUT ME </div></a>
        </div>
        )
    }
}

export default NavBar