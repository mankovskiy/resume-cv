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
    <main>
      <Hero>
        <HeroWrap>
          <HeroTitle>
            Hi, my name is
            <HeroName> Stanislav Mankovskyi</HeroName>
          </HeroTitle>
          <HeroTitleSmall>a frontend developer</HeroTitleSmall>
          <HeroBottom>with passion for learning and creating.</HeroBottom>

          <Button>Download CV</Button>
        </HeroWrap>
      </Hero>
      <Section>
        <Container>
          <ProjectsTitle>Projects</ProjectsTitle>
          {/* <List>
            <Item>
              <a href="{}" className="projects__link">
                <Thumb>
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <ProjectsWrapNname>
                    <p className="projects__name">Gaming streaming portal</p>
                  </ProjectsWrapNname>
                </Thumb>
              </a>
            </Item>
            <Item>
              <a href="{}" className="projects__link">
                <Thumb>
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <ProjectsWrapNname>
                    <p className="projects__name">Gaming streaming portal</p>
                  </ProjectsWrapNname>
                </Thumb>
              </a>
            </Item>
            <Item>
              <a href="{}" className="projects__link">
                <Thumb>
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <ProjectsWrapNname>
                    <p className="projects__name">Gaming streaming portal</p>
                  </ProjectsWrapNname>
                </Thumb>
              </a>
            </Item>
            <Item>
              <a href="{}" className="projects__link">
                <Thumb>
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <ProjectsWrapNname>
                    <p className="projects__name">Gaming streaming portal</p>
                  </ProjectsWrapNname>
                </Thumb>
              </a>
            </Item>
            <Item>
              <a href="{}" className="projects__link">
                <Thumb>
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <ProjectsWrapNname>
                    <p className="projects__name">Gaming streaming portal</p>
                  </ProjectsWrapNname>
                </Thumb>
              </a>
            </Item>
            <Item>
              <a href="{}" className="projects__link">
                <Thumb>
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <ProjectsWrapNname>
                    <p className="projects__name">Gaming streaming portal</p>
                  </ProjectsWrapNname>
                </Thumb>
              </a>
            </Item>
          </List> */}
          <ProjectList projects={projects} />
        </Container>
      </Section>
    </main>
  );
};
