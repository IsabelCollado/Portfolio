import { NavLink } from 'react-router-dom';
import '../styles/layouts/header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink to="/" className="nav-header">
          <h1 className="title">Home</h1>
        </NavLink>
        <ul className="ul-header">
          <li className="li-about">
            <NavLink to="/aboutme" className="underline-link">
              About Me
            </NavLink>
          </li>
          <li className="li-projects">
            <NavLink to="/projects" className="underline-link">
              Projects
            </NavLink>
          </li>
          <li className="li-contact">
            <NavLink to="/contact" className="underline-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
