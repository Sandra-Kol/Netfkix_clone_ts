import React, { useState, useEffect } from 'react';
import "./Nav.css";
import NetflixLogo from "./Netflix_logo.png";
import Netflix_avatar from "./Netflix_avatar.png";

function Nav() {

    const [showNav, setShowNav] = useState<boolean>(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShowNav(true);
        }
        else {
            setShowNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])

    return (
        <div className={`nav ${showNav ? "nav__black" : null}`}>
            <div className="nav__content">
                <img className='nav__logo' src={NetflixLogo} alt="Netflix Logo" />
                <img className='nav__avatar' src={Netflix_avatar} alt="Netflix_avatar" />
            </div>
        </div >
    )
}

export default Nav