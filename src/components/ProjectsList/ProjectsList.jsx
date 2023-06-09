import { ProjectCard } from 'components/Project/ProjectCard';
import { List } from 'Page/Projects/Projects.styled';

export const ProjectList = ({ projects }) => {
  return (
    <List>
      {projects.map(({ title, id, img }) => {
        return (
          <ProjectCard
            title={title}
            key={id}
            img={img ? img : 'https://dummyimage.com/370x360/fff/aaa'}
            id={id}
          />
        );
      })}
    </List>
  );
};
