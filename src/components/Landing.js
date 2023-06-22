import logo from '../images/Logo.png';
import '../styles/layouts/Landing.scss';

const Landing = () => {
  return (
    <section className="landing-section">
      <div className="landing-container">
        <img
          className="img_logo"
          src={logo}
          alt="Logo_image"
          title="logo_Isa"
        />
      </div>
      <div className="hero__profession--line border__up"></div>
      <h2 className="hero__profession">Full-Stack Developer</h2>
      <div className="hero__profession--line border__down"></div>
    </section>
  );
};

export default Landing;
