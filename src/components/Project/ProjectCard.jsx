// import './project.css';
import '../../styles/style.css';
import '../../styles/main.css';
import { Link } from 'react-router-dom';
// import { Item, Thumb, ProjectsWrapNname } from 'components/Main/Main.styled';
import { Img, Item, Thumb, ProjectsWrapNname } from './ProjectCard.styled';

export const ProjectCard = ({ title, img, id }) => {
  return (
    <Item>
      <Link to={`${id}`} className="projects__link">
        <Thumb>
          <Img src={img} />
          <ProjectsWrapNname>
            <p className="projects__name">{title}</p>
          </ProjectsWrapNname>
        </Thumb>
      </Link>
    </Item>
  );
};
