import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [t] = useTranslation('footer');
  return (
    <footer className="footer">
      <small className="footer--date">&copy; 2023|</small>
      <small className="footer--copy">{t('description')}</small>
    </footer>
  );
};
export default Footer;
