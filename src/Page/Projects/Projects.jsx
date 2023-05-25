import { ProjectsSection } from './Projects.styled';
import { Container } from 'components/App.styled';

import { projects } from '../../dataProjects/projects';
import { ProjectsTitle } from './Projects.styled';
import { ProjectList } from 'components/ProjectsList/ProjectsList';

export const Projects = () => {
  return (
    <main>
      <ProjectsSection>
        <Container>
          <ProjectsTitle>Projects</ProjectsTitle>
          <ProjectList projects={projects} />
        </Container>
      </ProjectsSection>
    </main>
  );
};
