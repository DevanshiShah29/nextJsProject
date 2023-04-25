import Link from 'next/link';
import React from 'react';
import { NavLink } from './HeaderStyles';
import { Space, Switch } from 'antd';

const Header = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);

  const handleThemeChange = (checked, event) => {
    console.log(checked, event, 'checked');
    if (!event) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

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
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
              <li className="nav-item-switch">
                <Space direction="vertical">
                  <Switch
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                    defaultChecked
                    onChange={(event) => handleThemeChange(event, event)}
                  />
                </Space>
              </li>
            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
