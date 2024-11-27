import React from 'react';
import "./footer.css";
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/CiPDlogo.png';


const Footer = () => {
    return (
        <footer>
            <div className="footer-logos">
                <img src={logo1} alt="Logo 1" className="logo-1" />
                <img src={logo2} alt="Logo 2" className="logo-2" />
                <img src={logo3} alt="Logo 3" className="logo-3" />
                <img src={logo4} alt="Logo 4" className="logo-4" />
                <img src={logo5} alt="Logo 5" className="logo-5" />
                <img src={logo6} alt="Logo 6" className="logo-6" />

            </div>
        </footer>
    );
};

export default Footer;
