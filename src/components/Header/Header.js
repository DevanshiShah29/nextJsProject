import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className="headerWrapper">
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <div>
            <NavLink exact to="/" className="nav-logo">
              Dev
              <i className="fa fa-code"></i>
            </NavLink>
          </div>
          <div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  href="#home"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  activeClassName="active"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#about"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  activeClassName="active"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#skills"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  activeClassName="active"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#projects"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  activeClassName="active"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#contacts"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                  activeClassName="active"
                >
                  Contacts
                </Link>
              </li>
              <li >
                <DiCssdeck size="3rem" />
              </li>
            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </div>
      </nav>

      {/* <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2> */}
      {/* <Div3>
      <SocialIcons href="https://google.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3> */}
    </div>
  );
};

export default Header;
