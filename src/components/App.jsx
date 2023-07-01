import { Wrapper } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RestrictedRoute } from './Routes/RestrictedRoute';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LogInPage = lazy(() => import('pages/LogInPage'));

export const App = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LogInPage />} />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </Wrapper>
  );
};
