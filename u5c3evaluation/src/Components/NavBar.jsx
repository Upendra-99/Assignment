import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav'>
            <Link className='nav-item' to='/'>Home</Link>
            <Link className='nav-item' to='/login'>Login</Link>
            <Link className='nav-item' to='/register'>Register</Link>
            <Link className='nav-item' to='/products'>Producs</Link>
        </div>
    )
}

export default NavBar