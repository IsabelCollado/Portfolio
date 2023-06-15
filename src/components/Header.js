import { NavLink } from 'react-router-dom';

const header = () => {
  return (
    <header className="">
      <nav className="">
        <NavLink to={'/'}>
          <h1>HOME</h1>
        </NavLink>
        <ul>
          <li>
            <NavLink to={'/aboutme'} className="">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to={'/projects'} className="">
              Proyects
            </NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} className="">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
