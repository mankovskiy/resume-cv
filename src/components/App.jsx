// import { HomePage } from 'Page/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { Projects } from 'Page/Projects/Projects';
import { Project } from './Project/Project';
import { HomePage } from 'Page/HomePage/HomePage';
import '../styles/main.css';
import { Skills } from 'Page/Skills/Skills';
import { Contacts } from 'Page/Contacts/Contacts';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { theme } from 'js/theme';
import { GlobalStyles } from 'js/global';

export const App = () => {
  const [curentTheme, setCurentTheme] = useState('light');
  const toggleTheme = () => {
    if (curentTheme === 'light') {
      setCurentTheme('dark');
    } else {
      setCurentTheme('light');
    }
    console.log(curentTheme);
  };
  return (
    <ThemeProvider
      theme={curentTheme === 'light' ? theme.lightTheme : theme.darkTheme}
    >
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout toggleTheme={toggleTheme} />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project" element={<Project />} />
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
