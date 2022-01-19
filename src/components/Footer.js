import React from "react";

import twitter from "../assets/img/twitter.png";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import github from "../assets/img/github.png";

function Footer() {
    return (
        <footer>
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={github} alt="github" />
        </footer>
    );
}

export default Footer;