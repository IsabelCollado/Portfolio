const ProjectCard = ({
  name,
  repoUrl,
  webUrl,
  description,
  image,
  languages,
}) => {
  return (
    <article className="projects-card">
      <div className="projects-card__visible">
        <div>
          <img src={image} alt={name} className="projects-card__visible__img" />
        </div>
      </div>
      <div className="projects-card__hidden">
        <h3 className="projects-card__hidden__h3">{name.toUpperCase()}</h3>
        <p className="projects-card__hidden__p">{description}</p>
        <div className="projects-card__hidden__div">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            title={`${name} code`}
            className="projects-card__hidden__div__a"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={webUrl}
            target="_blank"
            rel="noreferrer"
            title={`${name} website`}
            className="projects-card__hidden__div__a"
          >
            <i className="fa-solid fa-display"></i>
          </a>
        </div>
        <span className="projects--span">{languages.join(' . ')}</span>
      </div>
    </article>
  );
};

export default ProjectCard;
