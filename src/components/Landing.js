import logo from '../images/Logo.png';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const [t] = useTranslation('landing');
  return (
    <>
      <section className="landing">
        <section className="landing-section">
          <div className="landing-container">
            <img
              className="img_logo"
              src={logo}
              alt="Logo_image"
              title="logo_Isa"
            />
          </div>
          <p className="landing-section--p">{t('description')}</p>
        </section>
        <section className="seccion-2">
          <div className="hero__profession--line border__up"></div>
          <h2 className="hero__profession">Full-Stack Developer</h2>
          <div className="hero__profession--line border__down"></div>
        </section>
      </section>
    </>
  );
};

export default Landing;
