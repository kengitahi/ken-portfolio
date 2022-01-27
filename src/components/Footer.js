import React from "react";

import twitter from "../assets/img/twitter.png";
import linkedin_gray from "../assets/img/linkedin-gray.png"
import github from "../assets/img/github.png";

function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/kennedy_gitahi"><img src={twitter} alt="twitter" /></a>
            <a href="https://www.linkedin.com/in/kennedygitahi/"><img src={linkedin_gray} alt="linkedin" /></a>
            <a href="https://github.com/kengitahi"><img src={github} alt="github" /></a>
        </footer>
    );
}

export default Footer;