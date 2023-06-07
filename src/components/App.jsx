import { Routes, Route } from 'react-router-dom';
import { Projects } from 'Page/Projects/Projects';
import { ProjectDetails } from 'Page/ProjectDetails/ProjectDetails';
import { HomePage } from 'Page/HomePage/HomePage';
import { Skills } from 'Page/Skills/Skills';
import { Contacts } from 'Page/Contacts/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ThemeProvider } from '@emotion/react';
import { useState, useEffect } from 'react';
import { theme } from 'js/theme';
import { GlobalStyles } from 'js/global';

const LOCALSTORAGE_KEY = 'ui-theme';
export const App = () => {
  const [curentTheme, setCurentTheme] = useState('light');

  // function chekLocalStor() {
  //   const theme = localStorage.getItem(LOCALSTORAGE_KEY);

  //   if (theme === 'dark') {
  //     setCurentTheme('dark');
  //   } else {
  //     setCurentTheme('light');
  //   }
  // }
  const setMode = mode => {
    window.localStorage.setItem(LOCALSTORAGE_KEY, mode);
    setCurentTheme(mode);
  };
  useEffect(() => {
    // chekLocalStor();
    const localTheme = window.localStorage.getItem(LOCALSTORAGE_KEY);
    if (localTheme) {
      setCurentTheme(localTheme);
    } else {
      setMode('light');
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCALSTORAGE_KEY, curentTheme);
  // }, [curentTheme]);

  const toggleTheme = () => {
    if (curentTheme === 'light') {
      setCurentTheme('dark');
    } else {
      setCurentTheme('light');
    }
  };

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
          <Route path="/:id" element={<ProjectDetails />} />
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
