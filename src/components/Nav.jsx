import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <div className="nav-container">
            <Link to='/' >
                <button >Home</button>
            </Link>
            <Link to='/about' >
                <button >About</button>
            </Link>
            <Link to='/projects' >
                <button >Projects</button>
            </Link>
            <Link to='/contact' >
                <button >Contact</button>
            </Link>

        </div>
    )
}

export default Nav