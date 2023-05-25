import { SectionSkills } from './Skills.styled';
import {
  Container,
  SectionTitle,
  SectionTitlePoint,
  SectionTitleText,
} from 'components/App.styled';

export const Skills = () => {
  return (
    <main>
      <SectionSkills>
        <Container>
          <SectionTitle>Skills</SectionTitle>
          <SectionTitlePoint>Frontend</SectionTitlePoint>
          <SectionTitleText>
            JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
            BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
          </SectionTitleText>
          <SectionTitlePoint>Backend</SectionTitlePoint>
          <SectionTitleText>
            NodeJS, MySQL, MongoDB, PHP, Laravel
          </SectionTitleText>
        </Container>
      </SectionSkills>
    </main>
  );
};
