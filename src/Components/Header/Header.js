import React from 'react'
import logo from '../../assets/logoecommerce.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { blue } from '@mui/material/colors';
import "./Header.css"


const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>Mi Tienda</h1>
            <nav>
                <a href="">Categoria 1</a>
                <a href="">Categoria 2</a>
                <a href="">Categoria 3</a>
            </nav>
            <ShoppingCartIcon sx={{ color: blue[900] }} sx={{ fontSize: 60 }} />
        </header>
    )
}

export default Header

