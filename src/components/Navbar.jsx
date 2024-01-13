import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import '../styles/NavBar.css'
import Logo from '../icons/geekstore-logo1.png'


const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <nav className="navbar">
                <Link to="/">
                    <img className="logo" src={Logo} alt="GeekStore-Logo" />
                </Link>
                <ul className="menu">
                    <li><Link className="menu-link" to="/">Inicio</Link></li>
                    <li><Link className="menu-link" to="/productos">Productos</Link></li>
                    <li><Link className="menu-link" to="/productos/naruto">Naruto</Link></li>
                    <li><Link className="menu-link" to="/productos/jujutsukaisen">Jujutsu Kaisen</Link></li>
                    <li><Link className="menu-link" to="/productos/kimetsunoyaiba">Kimetsu no Yaiba</Link></li>
                    <li><Link className="menu-link" to="/productos/shingekinokyojin">Shingeki no Kyojin</Link></li>
                    <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
                    <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
                    <li><Link className="menu-link" to="/seguimiento">Seguimiento</Link></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </nav>
    )
}

export default Navbar