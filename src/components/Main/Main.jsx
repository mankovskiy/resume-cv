// import './Main.css';
import '../../styles/style.css';
import { ProjectsTitle } from 'Page/Projects/Projects.styled';
import {
  Hero,
  HeroWrap,
  HeroTitle,
  HeroName,
  HeroBottom,
  HeroTitleSmall,
  Button,
  Section,
} from './Main.styled';
import { Container } from 'components/App.styled';
import { ProjectList } from 'components/ProjectsList/ProjectsList';

export const Main = ({ projects }) => {
  return (
    <>
      <Hero>
        <HeroWrap>
          <HeroTitle>
            Hi, my name is
            <HeroName> Stanislav Mankovskyi</HeroName>
          </HeroTitle>
          <HeroTitleSmall>a frontend developer</HeroTitleSmall>
          <HeroBottom>with passion for learning and creating.</HeroBottom>
          <Button>Open CV</Button>
        </HeroWrap>
      </Hero>
      <Section>
        <Container>
          <ProjectsTitle>Projects</ProjectsTitle>
          <ProjectList projects={projects} />
        </Container>
      </Section>
    </>
  );
};
