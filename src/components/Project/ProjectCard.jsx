// import './project.css';
import '../../styles/style.css';
import '../../styles/main.css';
import { Link } from 'react-router-dom';
import { Item, Thumb, ProjectsWrapNname } from 'components/Main/Main.styled';

export const ProjectCard = ({ title, img, id }) => {
  return (
    <Item>
      <Link to={`${id}`} className="projects__link">
        <Thumb>
          <img src={img} alt="" className="projects__img" />
          <ProjectsWrapNname>
            <p className="projects__name">{title}</p>
          </ProjectsWrapNname>
        </Thumb>
      </Link>
    </Item>
  );
};
