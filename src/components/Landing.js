import logo from '../images/logo.png';
import '../styles/layouts/landing.scss';

const Landing = () => {
  return (
    <>
      <section className="landing-section">
        <div className="landing-container">
          <img
            className="img_logo"
            src={logo}
            alt="Logo_image"
            title="logo_Isa"
          />
        </div>
        <p className="landing-section--p">
          I consider myself a strong, hard-working and persevering person like
          the earth element. I am persevering in everything I set my mind to. I
          am a dog lover, especially the Rottweiler breed.
        </p>
      </section>
      <section className="seccion-2">
        <div className="hero__profession--line border__up"></div>
        <h2 className="hero__profession">Full-Stack Developer</h2>
        <div className="hero__profession--line border__down"></div>
      </section>
    </>
  );
};

export default Landing;
