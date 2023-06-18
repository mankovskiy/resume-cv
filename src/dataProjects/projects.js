import phoneBook from '../images/phoneBook.png';
import filmoteka from '../images/filmoteka.png';
export const projects = [
  {
    id: '1',
    title: 'Phonebook',
    skills: 'NodeJS, MySQL, MongoDB, PHP, Laravel',
    img: `${phoneBook}`,
    gitLink: 'https://mankovskiy.github.io/goit-react-hw-08-phonebook/',
  },
  {
    id: '2',
    title: 'Filmoteka',
    skills: 'NodeJS, MySQL, MongoDB, PHP, Laravel',
    img: `${filmoteka}`,
    gitLink: 'https://mankovskiy.github.io/goit-react-hw-05-movies/',
  },
  // {
  //   id: '3',
  //   title: 'GitLab',
  //   skills: 'NodeJS, MySQL, MongoDB, PHP, Laravel',
  //   img: '',
  //   gitLink: 'https://github.com/mankovskiy',
  // },
  // {
  //   id: '4',
  //   title: 'Serial',
  //   skills: 'NodeJS, MySQL, MongoDB, PHP, Laravel',
  //   img: '',
  //   gitLink: 'https://github.com/mankovskiy',
  // },
  // {
  //   id: '5',
  //   title: 'Potato',
  //   skills: 'NodeJS, MySQL, MongoDB, PHP, Laravel',
  //   img: '',
  //   gitLink: 'https://github.com/mankovskiy',
  // },
];

export const getProjectById = projectId => {
  return projects.find(project => project.id === projectId);
};
