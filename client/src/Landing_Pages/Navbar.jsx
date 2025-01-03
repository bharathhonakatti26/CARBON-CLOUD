import React from 'react';
import './Navbar.css';
import imglog from '../Assets/new_carbon_cloud.png';
import { Link, useNavigate } from 'react-router-dom';

const navbar = () => {
    return (

        <div className="nav">
            <div className="logo">
                <Link to="/" ><img src={imglog} alt="hello" className="logoimg" /></Link>
            </div>
            <div className="first">
                <ul>
                    <li><Link className="overview" to="/pagenotfound">Overview</Link></li>
                    <li> <Link to="/pagenotfound" >Solution</Link></li>
                    <li><Link to="/pagenotfound" >Products</Link></li>
                    <li><Link to="/pagenotfound">Pricing</Link></li>
                    <li><Link to="/pagenotfound" className='resorce'>Resource</Link></li>
                    <li><Link className="contactus" to="/pagenotfound">Contact Us</Link></li>
                </ul>
            </div>
            <div className="second">
                <ul>
                    <li><Link to="/pagenotfound" className='docs'>Docs</Link></li>
                    <li><Link to="/pagenotfound" className='support'>Support</Link></li>
                    <li>
                        {!localStorage.getItem('user') ? (
                            <Link to="/login" className='signin'>Sign in</Link>
                        ) : null}
                    </li>

                    <li>
                        <Link to="/welcome" className='startfree'>
                            <div className="bluebox" >Start Now</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default navbar;