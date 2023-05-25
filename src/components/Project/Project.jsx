// import './project.css';
import '../../styles/style.css';
import '../../styles/main.css';

export const Project = ({ title, img }) => {
  return (
    <li className="projects__item">
      <a href="77" className="projects__link">
        <div className="thumb">
          <img src={img} alt="" className="projects__img" />
          <div className="projects-wrap__name">
            <p className="projects__name">{title}</p>
          </div>
        </div>
      </a>
    </li>
  );
};
