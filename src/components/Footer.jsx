import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <div className="footer">
        <p className="footer-p">Coopyright {currentYear}</p>
        </div>
    )
}

export default Footer;