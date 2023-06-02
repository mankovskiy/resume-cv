// import '../../styles/style.css';
import { useParams } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';
import { ProjectSection } from './ProjectDetails.styled';
import { Container, SectionTitle } from 'components/App.styled';
import {
  ProjectWrap,
  ProjectDitalsCover,
  ProjectDitalesDescript,
  ButonOutline,
} from './ProjectDetails.styled';
import { getProjectById } from 'dataProjects/projects';

export const ProjectDetails = () => {
  const { id } = useParams();

  const project = getProjectById(id);
  const { title, img, skills, gitLink } = project;

  return (
    <main>
      <ProjectSection>
        <Container>
          <ProjectWrap>
            <SectionTitle>{title}</SectionTitle>
            <ProjectDitalsCover src={img} alt={''} />
            <ProjectDitalesDescript>
              <p>{skills}</p>
            </ProjectDitalesDescript>
            <ButonOutline
              href={gitLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillGithub />
              GitHub repo
            </ButonOutline>
          </ProjectWrap>
        </Container>
      </ProjectSection>
    </main>
  );
};
