import { Wrapper } from './App.styled';
import { Toaster } from 'react-hot-toast';
import ContactsPage from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RegisterPage from 'pages/RegisterPage';
import LogInPage from 'pages/LogInPage';
import { Layout } from './Layout/Layout';
import HomePage from 'pages/HomePage';

export const App = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
        </Route>
      </Routes>
      <Toaster />
    </Wrapper>
  );
};
