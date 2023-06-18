import { Suspense } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const SharedLayout = ({ toggleTheme, curentTheme }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} curentTheme={curentTheme} />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
