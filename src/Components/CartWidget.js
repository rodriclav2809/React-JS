import React, { Components } from "react"
import { Link } from 'react-router-dom'


const CartWidget = () => {

    return (
        <div>
            <Link to='/'>
                <img src='.//assets/logoecommerce.jpg' width='70' className="d-flex p-3" />
            </Link>
        </div>
    )
}

export default CartWidget