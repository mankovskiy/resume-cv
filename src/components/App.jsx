import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { ThemeProvider } from '@emotion/react';
import { useState, useEffect } from 'react';
import { theme } from 'js/theme';
import { GlobalStyles } from 'js/global';

const Projects = lazy(() => import('../Page/Projects/Projects'));
const ProjectDetails = lazy(() =>
  import('../Page/ProjectDetails/ProjectDetails')
);
const HomePage = lazy(() => import('../Page/HomePage/HomePage'));
const Skills = lazy(() => import('../Page/Skills/Skills'));
const Contacts = lazy(() => import('../Page/Contacts/Contacts'));
// const SharedLayout = lazy(() =>
//   import('../components/SharedLayout/SharedLayout')
// );

const LOCALSTORAGE_KEY = 'ui-theme';
export const App = () => {
  const [curentTheme, setCurentTheme] = useState('light');

  const toggleTheme = () => {
    if (curentTheme === 'light') {
      setCurentTheme('dark');
      setMode('dark');
    } else {
      setCurentTheme('light');
      setMode('light');
    }
  };
  const setMode = mode => {
    window.localStorage.setItem(LOCALSTORAGE_KEY, mode);
    setCurentTheme(mode);
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem(LOCALSTORAGE_KEY);
    if (localTheme) {
      setCurentTheme(localTheme);
    } else {
      setMode('light');
    }
  }, []);

  return (
    <ThemeProvider
      theme={curentTheme === 'light' ? theme.lightTheme : theme.darkTheme}
    >
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout toggleTheme={toggleTheme} curentTheme={curentTheme} />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route
            path="contacts"
            element={
              <Contacts
                tel={'+644646464649'}
                mail={'odnorazka25@gmail.com'}
                text={'Email'}
              />
            }
          />
          <Route path="skills" element={<Skills />} />
          <Route path="homePage" element={<HomePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
