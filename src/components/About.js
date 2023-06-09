import foto from '../images/Foto_Isa_3.jpg';
import curriculum from '../docs/Curriculum Isabel Collado.pdf';

const About = () => {
  return (
    <>
      <section className="sectionAbout">
        <h1 className="sectionAbout--h1">About Me</h1>
        <div className="sectionAbout--div">
          <img
            className="sectionAbout--div__img"
            src={foto}
            alt="Isa_image"
            title="Isa_image"
          />
        </div>
        <p className="sectionAbout--p">Administrative assistant turned.....</p>
        <div className="about__profession--line border__up"></div>
        <h2 className="about__profession">Jr.Full-Stack </h2>
        <div className="about__profession--line border__down"></div>
      </section>

      <article className="articleAbout">
        <p className="articleAbout--p">
          I come from the administration sector, but I have always felt
          attracted to the world of programming.
        </p>

        <p className="articleAbout--p">
          After exploring the world of web programming and seeing that I loved
          it, I decided to take the Web Programming Bootcamp at Adalab, where
          they have given me the opportunity to obtain the necessary knowledge
          to follow a dream of becoming a great programmer and continue
          discovering this exciting world, where you never stop learning new
          things.
        </p>
        <p className="articleAbout--p">
          I consider myself an extrovert, resolute and very organised person. I
          have good time management and leadership skills.
        </p>
        <div className="articleAbout--div">
          <a
            className="articleAbout--a"
            href={curriculum}
            target="_blank"
            rel="noreferrer"
          >
            <span className="articleAbout--a__span">Curriculum </span>
            <i className="fa-regular fa-file-pdf"></i>
          </a>
        </div>
      </article>
    </>
  );
};

export default About;
