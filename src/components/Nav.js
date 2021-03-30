import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        if (window.scrollY > 100){
            //handleShow(true);
        } else {
            handleShow(false)
        }
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png" alt="Netflix Logo" className="nav__logo"/>
            {/* add an image */}
            <img src="https://cdn3.iconfinder.com/data/icons/user-interface-line-8/32/user_account_people_ui_app_web_mobile-512.png" alt="User Avatar" className="nav__avatar"/>
        </div>        
    );
}

export default Nav
