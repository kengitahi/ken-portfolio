import React from "react";

import profile_pic from "../assets/img/profile_img.jpg";
import mail from "../assets/img/mail.png";
import linkedin from "../assets/img/linkedin.png";

function Info() {
    return (
        <div>
            <div className="profile-pic">
                <img src={profile_pic} alt="profile" />
            </div>
            <div className="inner-container">
                <div className="intro">
                    <h1>Kennedy Gitahi</h1>
                    <h2>Full Stack Web Developer</h2>
                    <h3><a href="://google.com">kengitahi.com</a></h3>
                </div>
                <div className="buttons">
                    <a className="email" href="mail:kengitahi@hotmail.com"><img src={mail} alt="Email" />Email</a>
                    <a className="linkedin" href="https://www.linkedin.com/in/kennedygitahi/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin" />LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

export default Info;