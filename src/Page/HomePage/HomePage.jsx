// import '../../styles/style.css';
import { projects } from 'dataProjects/projects';
import { Main } from '../../components/Main/Main';

const HomePage = () => {
  return (
    <main>
      <Main projects={projects} />
    </main>
  );
};

export default HomePage;
