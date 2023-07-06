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
    <article className="projects--item">
      <div className="projects--item__visible">
        <div>
          <img
            src={image}
            alt={name}
            className="projects--item__visible__img"
          />
        </div>
      </div>
      <div className="projects--item__hidden">
        <h3 className="projects--item__hidden__h3">{name.toUpperCase()}</h3>
        <p className="projects--item__hidden__p">{description}</p>
        <div className="projects--item__hidden__div">
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            title={`${name} code`}
            className="projects--item__hidden__div__a"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={webUrl}
            target="_blank"
            rel="noreferrer"
            title={`${name} website`}
            className="projects--item__hidden__div__a"
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
