import React from 'react';
import {Link} from "react-router";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary m-3">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand" >BlogSitesi</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" aria-current="page" >Anasayfa</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" href="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="blogs" className="nav-link">Postlar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;