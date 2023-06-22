import About from '../images/foto-Isa.png';
import '../styles/layouts/AboutMe.scss';
const AboutMe = () => {
  <>
    <section className="sectionAbout">
      <h1 className="sectionAbout--h1">About me</h1>
      <div className="sectionAbout--div">
        <img
          className="sectionAbout--div__img"
          src={About}
          alt="Isa's img"
          title="Isa's img"
        />
      </div>
    </section>
    <article className="articleAbout">
      <p className="articleAbout--pAcc">
        Administrative assistant turned programmer
      </p>
      <p className="articleAbout--p">I’m a full-stack developer 👩🏼‍💻</p>
    </article>
  </>;
};

export default AboutMe;
