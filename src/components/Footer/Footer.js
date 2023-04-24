import React from 'react';
import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerMain">
        <div className="footerLeft">
          <div className="nav-logo">Dev</div>
          <div>
            Innovating one project at a time, Innovating one project at a time Innovating one
            project at a timeInnovating one project at a time
          </div>
        </div>

        <div>
          <div className="socialLinks">Socials</div>

          <a href="https://google.com" className="socialIcons">
            <AiFillGithub size="3rem" />
          </a>
          <a href="https://google.com" className="socialIcons">
            <AiFillLinkedin size="3rem" />
          </a>
          <a href="https://google.com" className="socialIcons">
            <AiOutlineMail size="3rem" />
          </a>
        </div>
      </div>

      <hr />
      <div className="copyright">© 2023 Devanshi Shah</div>
    </div>
  );
};

export default Footer;
