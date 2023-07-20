import '../styles/layouts/contact.scss';
import { useTranslation } from 'react-i18next';

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [t] = useTranslation('contact');
  return (
    <>
      <section className="sectionContact">
        <h1 className="sectionContact--h1"> {t('title')} </h1>
      </section>
      <div className="sectionContact--div">
        <section>
          <div className="hero__profession--line border__up"></div>
          <h2 className="hero__profession"> {t('hero')} 📞 </h2>
          <div className="hero__profession--line border__down"></div>
        </section>
        <section className="sectionContact--text">
          <p className="sectionContact--text1">{t('text1')} 📩</p>
          <p className="sectionContact--text2">{t('text2')}</p>
          <a
            className="sectionContact--email"
            href="mailto:icolladoherrera@gmail.com"
          >
            icolladoherrera@gmail.com
          </a>
          <p className="sectionContact--text3">{t('text3')}</p>
          <section className="sectionLink">
            <div className="sectionLink--div">
              <a
                target="_blank"
                rel="noreferrer"
                className="sectionLink--a"
                href="https://github.com/IsabelCollado"
                alt="GitHub Isabel Collado"
              >
                <i className="fab fa-github-alt"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="sectionLink--a"
                href="https://www.linkedin.com/in/isabel-collado-herrera/"
                alt="Linkedin Isabel Collado"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="sectionLink--a"
                href="https://www.instagram.com/isaquini/"
                alt="Instagram Isabel Collado"
              >
                <i className="fab fa-instagram-square"></i>
              </a>
            </div>
          </section>
          <p className="sectionContact--text4">{t('text4')}</p>
          <div className="sectionContact--divForm">
            <form
              className="sectionContact--form"
              action="https://getform.io/f/ab69f5a0-d51f-4204-8c76-558c0a178293"
              method="POST"
            >
              <label className="sectionContact--label" htmlFor="fname">
                {t('form_label1')}
              </label>
              <input
                className="sectionContact--input"
                type="text"
                id="fname"
                name="firstname"
                placeholder={t('placeholdername')}
              />
              <label className="sectionContact--label" htmlFor="lname">
                {t('form_label2')}
              </label>
              <input
                className="sectionContact--input"
                type="text"
                id="lname"
                name="lastname"
                placeholder={t('placeholderlastname')}
              />
              <label htmlFor="email" className="sectionContact--label">
                Email
              </label>
              <input
                className="sectionContact--input"
                type="mail"
                id="email"
                name="email"
                placeholder={t('placeholderemail')}
              />
              <label htmlFor="subject" className="sectionContact--label">
                {t('form_label4')}
              </label>
              <textarea
                className="sectionContact--textarea"
                id="subject"
                name="subject"
                placeholder={t('textarea')}
              />
              <div className="wrap">
                <button className="button">{t('button')}</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default contact;
