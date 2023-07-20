import ProjectList from './projectList';
import '../styles/layouts/projects.scss';
import { useTranslation } from 'react-i18next';

const Projects = ({ projectCardData }) => {
  const [t] = useTranslation('projects');

  return (
    <>
      <section className="section-Projects">
        <h1 className="section-Projects--h1"> {t('title')}</h1>
        <ProjectList />
      </section>
    </>
  );
};

export default Projects;
