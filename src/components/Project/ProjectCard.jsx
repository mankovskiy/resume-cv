// import './project.css';
import '../../styles/style.css';
import '../../styles/main.css';
import { Link } from 'react-router-dom';
import { Img, Item, Thumb, ProjectsWrapNname } from './ProjectCard.styled';

export const ProjectCard = ({ title, img, id }) => {
  return (
    <Item>
      <Link to={`${id}`} className="projects__link">
        <Thumb>
          <Img src={img ? img : 'https://dummyimage.com/370x360/fff/aaa'} />
          <ProjectsWrapNname>
            <p className="projects__name">{title}</p>
          </ProjectsWrapNname>
        </Thumb>
      </Link>
    </Item>
  );
};
