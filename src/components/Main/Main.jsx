// import './Main.css';
import '../../styles/style.css';
import { ProjectsTitle } from 'Page/Projects/Projects.styled';
import { Hero } from './Main.styled';

export const Main = () => {
  return (
    <main>
      <Hero>
        <div className="hero__wrap">
          <span className="hero__title">
            Hi, my name is
            <span className="hero__name"> Stanislav Mankovskyi</span>
          </span>
          <h1 className="hero__title hero__title--small">
            a frontend developer
          </h1>
          <p className="hero__bottom">
            with passion for learning and creating.
          </p>

          <button className="button">Download CV</button>
        </div>
      </Hero>
      <section className="projects">
        <div className="container">
          <ProjectsTitle>Projects</ProjectsTitle>
          <ul className="projects__list">
            <li className="projects__item">
              <a href="{}" className="projects__link">
                <div className="thumb">
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <div className="projects-wrap__name">
                    <p className="projects__name">Gaming streaming portal</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="projects__item">
              <a href="{}" className="projects__link">
                <div className="thumb">
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <div className="projects-wrap__name">
                    <p className="projects__name">Gaming streaming portal</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="projects__item">
              <a href="{}" className="projects__link">
                <div className="thumb">
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <div className="projects-wrap__name">
                    <p className="projects__name">Gaming streaming portal</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="projects__item">
              <a href="{}" className="projects__link">
                <div className="thumb">
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <div className="projects-wrap__name">
                    <p className="projects__name">Gaming streaming portal</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="projects__item">
              <a href="{}" className="projects__link">
                <div className="thumb">
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <div className="projects-wrap__name">
                    <p className="projects__name">Gaming streaming portal</p>
                  </div>
                </div>
              </a>
            </li>
            <li className="projects__item">
              <a href="{}" className="projects__link">
                <div className="thumb">
                  <img
                    src="https://images.pexels.com/photos/33492/cat-red-cute-mackerel.jpg?auto=compress&cs=tinysrgb&h=480&w=640"
                    alt=""
                    className="projects__img"
                  />
                  <div className="projects-wrap__name">
                    <p className="projects__name">Gaming streaming portal</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
