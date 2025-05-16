import React from "react";
import styles from "./footer.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./flare.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Left section */}
            <div className={styles.left}>
                <p className={styles.contactBtn}>CONTACT US</p>
                <p className={styles.email}>contact@solarsystemscope.com</p>
                <div className={styles.socialIcons}>
                    <img src="https://th.bing.com/th/id/R.8b48b3d558e28ca24b56a76289b5bb2c?rik=G9vZnmKsi4LiWA&pid=ImgRaw&r=0" />
                    <img src="https://1000logos.net/wp-content/uploads/2017/05/New-YouTube-logo.jpg" />
                    <img src="https://tse4.mm.bing.net/th/id/OIP.0Wr8QQ_owG7LRehjZDN3QAHaEK?rs=1&pid=ImgDetMain" />
                </div>
            </div>

            {/* Center section */}
            <div className={styles.center}>
                <img src={logo} alt="Logo" />
                <div className={styles.devInfo}>
                    <p>Invented and Developed <br />
                    by <span>INOVE</span></p>
                </div>
            </div>

            {/* Right section */}
            <div className={styles.right}>
                <h3>POPULAR SPACEPEDIA</h3>
                <ul>
                    <li>Orbital and rotational characteristics…</li>
                    <li>Handbook - The Sun</li>
                    <li>Handbook - Mars</li>
                    <li>Handbook - Jupiter</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
