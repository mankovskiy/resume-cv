import { Project } from 'components/Project/Project';
import { List } from 'Page/Projects/Projects.styled';

export const ProjectList = ({ projects }) => {
  return (
    <List>
      {projects.map(({ title, id, img, skills, gitLink }) => {
        return (
          <Project
            title={title}
            key={id}
            img={img}
            skills={skills}
            gitLink={gitLink}
          />
        );
      })}
    </List>
  );
};
