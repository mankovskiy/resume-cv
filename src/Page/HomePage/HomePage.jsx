// import '../../styles/style.css';
import { projects } from 'dataProjects/projects';
import { Main } from '../../components/Main/Main';

export const HomePage = () => {
  return (
    <>
      <Main projects={projects} />
    </>
  );
};
