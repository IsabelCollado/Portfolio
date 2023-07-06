import defaultImage from '../images/image_por_defecto.jpeg';
import ProjectCard from './projectCard';
import '../styles/layouts/projects.scss';

const Projects = ({ projectCardData }) => {
  const dataCard = projectCardData.map((eachProject) => {
    return (
      <ProjectCard
        key={eachProject.id}
        name={eachProject.name}
        repoUrl={eachProject.repoUrl}
        webUrl={eachProject.webUrl}
        description={eachProject.descriptionEn}
        image={eachProject.image === '' ? defaultImage : eachProject.image}
        languages={eachProject.languages}
      />
    );
  });
  return (
    <>
      <section className="section-Projects">
        <h1 className="section-Projects--h1">Projects</h1>
      </section>
      <div className="projects">
        <ul className="projects--list">{dataCard}</ul>
      </div>
    </>
  );
};

export default Projects;
