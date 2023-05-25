import '../../styles/style.css';
import { ProjectSection } from './Project.styled';
import { Container } from 'components/App.styled';

export const Project = ({ title, img, skills, gitLink }) => {
  return (
    <main>
      <ProjectSection>
        <Container>
          <div className="project-details">
            <h1 className="section-title">{title}</h1>
            <img className="project-ditals__cover" src={img} alt="" />
            <div className="project-ditales__descript">
              <p>{skills}</p>
            </div>
            <a href="#!" className="buton-outline">
              <img src="./images/git.svg" alt="" />
              {gitLink}
            </a>
          </div>
        </Container>
      </ProjectSection>
    </main>
  );
};
