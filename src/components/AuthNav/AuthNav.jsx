import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">LogIn</NavLink>
    </div>
  );
}

export default AuthNav;
