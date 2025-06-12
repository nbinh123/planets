import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./header.module.scss";

function NavItem({ content, href = "/" }) {

    const location = useLocation();
    const isActive = location.pathname === href;
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); // ngăn chuyển trang ngay lập tức

        // (nếu có) chạy animation ở đây...
        window.scrollTo(0, 0);
        setTimeout(() => {
            navigate(href);
        }, 500);
    }
    return (
        <li className="nav-item mx-3 active" onClick={handleClick}>
            <div
                className={`nav-link ${isActive ? "active" : ""} px-3`}
                style={{ color: "white" }}
                to={href}
            >
                {content}
            </div>
        </li>
    );
}

function Header() {

    const navItems = useRef([
        { content: "Home", href: "/" },
        { content: "About", href: "/about" },
        { content: "Productions", href: "/productions" },
        { content: "Universe", href: "/universe" },
        { content: "Login", href: "/login" },
        { content: "Solar system", href: "/solar.html" }
    ]);



    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top px-4">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">SolarSite</Link>

                {/* Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Nav Items */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav nav-underline ms-auto">
                        {navItems.current.map((element, index) => (
                            <NavItem
                                key={index}
                                content={element.content}
                                href={element.href}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
