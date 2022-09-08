import React from 'react'
import logo from '../../assets/logoecommerce.jpg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { blue } from '@mui/material/colors';
import { Nav } from './Nav/Nav';


const Header = ({ name, surname, id, children }) => {

    const categorias = [
        { id: 0, nombre: 'Categoria 1' },
        { id: 1, nombre: 'Categoria 2' },
        { id: 2, nombre: 'Categoria 3' },
        { id: 3, nombre: 'Categoria 4' },
    ]

    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="logo" />
            <h1>Welcome {name}</h1>
            <Nav categorias={categorias}/>
            <ShoppingCartIcon color="success" fontSize="large" />
        </header>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagen: {
        width: '10%',
    },
}

export default Header

