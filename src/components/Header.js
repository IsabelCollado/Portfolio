import { NavLink } from 'react-router-dom';
import LanguageButtons from './languageButtons';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t] = useTranslation('header');
  return (
    <header className="header">
      <nav className="nav-container">
        <NavLink to="/" className="nav-header">
          <h1 className="title">{t('title')}</h1>
        </NavLink>
        <ul className="ul-header">
          <li className="li-about">
            <NavLink to="/aboutme" className="underline-link">
              {t('about')}
            </NavLink>
          </li>
          <li className="li-projects">
            <NavLink to="/projects" className="underline-link">
              {t('projects')}
            </NavLink>
          </li>
          <li className="li-contact">
            <NavLink to="/contact" className="underline-link">
              {t('contact')}
            </NavLink>
          </li>
        </ul>
        <div className="div-lenguage">
          <LanguageButtons />
        </div>
      </nav>
    </header>
  );
};

export default Header;
