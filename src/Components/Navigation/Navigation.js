import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/Logo.png'
function Navigation() {
    return (
        <div className='Navigation'>
            <Link to='#'><img className='Logo' src={Logo} alt='Dom Residential' /></Link>
            <nav className='Nav_nav'>
                <ul className='NavUL'>
                    <li><Link className='NavLink' to='#'>The Enterprise</Link></li>
                    <li><Link className='NavLink' to='#'>Company History</Link></li>
                    <li><Link className='NavLink' to='#'>Competent Architecture</Link></li>
                    <li><Link className='NavLink' to='#'>Our Mission</Link></li>
                    <li><Link className='NavLink' to='#'>From A to Z</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
