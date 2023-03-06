import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <div className="container">
                    <div className="row d-flex justify-content-center mt-4">
                        <div className="col-12 col-md-12">
                            <div className="navbarSection">
                                <ul className='d-flex justify-content-evenly h-100 align-items-center'>
                                    <li><Link to="/" style={{ color: "white" }}> Home </Link></li>
                                    <li><Link to="/About" style={{ color: "white" }}> About </Link></li>
                                    <li><Link to="/Menu/" style={{ color: "white" }}>Menu</Link></li>
                                    <li><Link to="/Book" style={{ color: "white" }}>Book</Link></li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
