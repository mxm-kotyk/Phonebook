import { AppBar } from 'components/AppBar/AppBar';
import { SuspenseLoader } from 'helpers/suspense-loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
