import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>

            <div className='image'>
                <img id="imageid" src='/AAJ.png' alt='aaj logo'/>
            </div>

            <div className='homeandlogout'>
                <div className='home'>
                    <Link to="/home">
                        <AiOutlineHome id="home-icon" style={{ color: 'black' }}/>
                    </Link>
                    <Link to="/home">
                        <h3 id='h1'>Home</h3>
                    </Link>
                </div>               
                <div className='logout'>
                    <Link to="/logout">
                        <h3 id='l1'>Logout</h3>
                    </Link>
                    <Link to="/logout">
                        <FiLogOut style={{ color: 'black' }}/>
                    </Link>
                </div>
            </div>
        </div>
        
    );
}
export default Navbar;