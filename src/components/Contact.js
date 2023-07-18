import '../styles/layouts/contact.scss';

const contact = () => {
  return (
    <>
      <section className="sectionContact">
        <h1 className="sectionContact--h1">Contact</h1>
      </section>
      <div className="sectionContact--div">
        <section>
          <div className="hero__profession--line border__up"></div>
          <h2 className="hero__profession">Let's talk! 📞 </h2>
          <div className="hero__profession--line border__down"></div>
        </section>
        <section className="sectionContact--text">
          <p className="sectionContact--text1">
            I am currently looking for a job. I would love to join a project
            that allows me to expand and sharpen my skills as a developer and
            help the team to develop their product. 📩
          </p>
          <p className="sectionContact--text2">You can contact me by email:</p>
          <a
            className="sectionContact--email"
            href="mailto:icolladoherrera@gmail.com"
          >
            icolladoherrera@gmail.com
          </a>
          <p className="sectionContact--text3">
            Or through the following links:
          </p>
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
          <p className="sectionContact--text4">
            Alternatively, you can fill in this form:
          </p>
          <div className="sectionContact--divForm">
            <form
              className="sectionContact--form"
              action="https://getform.io/f/ab69f5a0-d51f-4204-8c76-558c0a178293"
              method="POST"
            >
              <label className="sectionContact--label" htmlFor="fname">
                Name
              </label>
              <input
                className="sectionContact--input"
                type="text"
                id="fname"
                name="firstname"
                placeholder="Name.."
              />
              <label className="sectionContact--label" htmlFor="lname">
                Lastname
              </label>
              <input
                className="sectionContact--input"
                type="text"
                id="lname"
                name="lastname"
                placeholder="Lastname.."
              />
              <label htmlFor="email" className="sectionContact--label">
                Email
              </label>
              <input
                className="sectionContact--input"
                type="mail"
                id="email"
                name="email"
                placeholder="Your-email@email.com"
              />
              <label htmlFor="subject" className="sectionContact--label">
                Message
              </label>
              <textarea
                className="sectionContact--textarea"
                id="subject"
                name="subject"
                placeholder="Write your own text.."
              />
              <div className="wrap">
                <button className="button">Submit</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default contact;
