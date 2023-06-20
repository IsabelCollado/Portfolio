import { NavLink } from 'react-router-dom';
import '../styles/layouts/Header.scss';

const header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink to={'/'} className="nav-header">
          <h1 className="title">HOME</h1>
        </NavLink>
        <ul className="ul-header">
          <li className="li-about">
            <NavLink to={'/aboutme'} className="nav-link">
              About Me
            </NavLink>
          </li>
          <li className="li-proyects">
            <NavLink to={'/projects'} className="nav-link">
              Proyects
            </NavLink>
          </li>
          <li className="li-contact">
            <NavLink to={'/contact'} className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
