import foto from '../images/Foto_Isa_3.jpg';
import spanishCurriculum from '../docs/Curriculum-Isabel-Collado.pdf';
import englishCurriculum from '../docs/Curriculum-english-Isabel-Collado.pdf';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [t] = useTranslation('aboutme');
  return (
    <>
      <section className="sectionAbout">
        <h1 className="sectionAbout--h1">{t('title')}</h1>
        <div className="sectionAbout--div">
          <img
            className="sectionAbout--div__img"
            src={foto}
            alt="Isa_image"
            title="Isa_image"
          />
        </div>
        <p className="sectionAbout--p">{t('profession1')}</p>
        <div className="about__profession--line border__up"></div>
        <h2 className="about__profession">Jr.Full-Stack </h2>
        <div className="about__profession--line border__down"></div>
      </section>

      <article className="articleAbout">
        <p className="articleAbout--p">{t('articleAbout1')}</p>

        <p className="articleAbout--p">{t('articleAbout2')}</p>
        <p className="articleAbout--p">{t('articleAbout3')}</p>
      </article>
      <div className="bottonCv">
        <div className="bottonAbout">
          <a
            className="bottonAbout--a"
            href={spanishCurriculum}
            target="_blank"
            rel="noreferrer"
          >
            <span className="bottonAbout--a__span">
              {t('buttonAboutSpanish')}
            </span>
            <i className="fa-regular fa-file-pdf"></i>
          </a>
        </div>
        <div className="bottonAbout_2">
          <a
            className="bottonAbout--a"
            href={englishCurriculum}
            target="_blank"
            rel="noreferrer"
          >
            <span className="bottonAbout--a__span">
              {t('buttonAboutEnglish')}{' '}
            </span>
            <i className="fa-regular fa-file-pdf"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
