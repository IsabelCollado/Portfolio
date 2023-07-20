import ProjectCard from './projectCard';
import defaultImage from '../images/image_por_defecto.jpeg';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/layouts/projects.scss';

const ProjectList = () => {
  const { t } = useTranslation('projects');
  return (
    <ul className="projects">
      {t('projectsinfo', { returnObjects: true }).map((eachProject) => (
        <React.Fragment key={eachProject.id}>
          {eachProject.visible && (
            <li
              className="projects--list"
              key={eachProject.id}
              id={eachProject.id}
            >
              <ProjectCard
                key={eachProject.id}
                name={eachProject.name}
                repoUrl={eachProject.repoUrl}
                webUrl={eachProject.webUrl}
                description={eachProject.descriptionEn}
                image={
                  eachProject.image === '' ? defaultImage : eachProject.image
                }
                languages={eachProject.languages}
              />
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};
export default ProjectList;
