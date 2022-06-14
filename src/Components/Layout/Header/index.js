import React, { useEffect, useState } from "react";



/*  RENDER  */
export function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prevCheck) => !prevCheck)
    }

    return (
        <header>
            <div className="container">
                <div
                    className="burger-menu"
                    onClick={toggleDropdown}
                />
                <div className="logo">
                    <a href="/" />
                </div>
                <div className="avatar" />
            </div>

            <ul className={`dropdown-menu ${showDropdown ? "" : "hide"}`}>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
            </ul>
        </header>
    )
}