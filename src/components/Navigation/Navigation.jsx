import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">LogIn</NavLink>
    </nav>
  );
};
