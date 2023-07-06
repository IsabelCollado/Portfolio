import '../styles/layouts/project-card.scss';

const ProjectCard = ({
  name,
  repoUrl,
  webUrl,
  description,
  image,
  languages,
}) => {
  return (
    <div className="projects-card">
      <div className="projects-card--content">
        <div className="projects-card--front">
          <img src={image} alt={name} className="projects-card--front__img" />
        </div>
      </div>
      <div className="projects-card--back">
        <h3 className="projects-card--back__h3">{name.toUpperCase()}</h3>
        <p className="projects-card--back__p">{description}</p>
        <div className="projects-card--back__div">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            title={`${name} code`}
            className="projects-card--back__div__a"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={webUrl}
            target="_blank"
            rel="noreferrer"
            title={`${name} website`}
            className="projects-card--back__div__a"
          >
            <i className="fa-solid fa-display"></i>
          </a>
        </div>
        <span className="projects--span">{languages.join(' . ')}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
