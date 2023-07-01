import { StyledNavLink } from 'components/shared-styles/nav-link.styled';

function AuthNav() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">LogIn</StyledNavLink>
    </div>
  );
}

export default AuthNav;
