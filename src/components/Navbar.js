import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
        
            <nav className="nav-wrapper">
                
                <div className="container-fluid">
                    
                    <ul className="right">
                    <li><Link to="/home">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        <li><Link to="/sign-in">Sign in</Link></li>
                        <li><Link to="/sign-up">Sign up</Link></li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                    </ul>
                </div>
            </nav>
        
    )
}

export default Navbar;