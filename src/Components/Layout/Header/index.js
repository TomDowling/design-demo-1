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
                <li onClick={toggleDropdown}><a href="#about-section">About Us</a></li>
                <li onClick={toggleDropdown}><a href="#achievements-section">Achievements</a></li>
                <li onClick={toggleDropdown}>
                    <a
                        href="https://www.figma.com/file/HnnOJEiSTsvf1n4wPIZ1AU/Blockchain-Technology-And-Currency-Exchange-Landing-Page-UI-UX-Design-(Community)?node-id=1%3A2"
                        target="_blank"
                    >
                        Figma
                    </a>
                </li>
            </ul>
        </header>
    )
}