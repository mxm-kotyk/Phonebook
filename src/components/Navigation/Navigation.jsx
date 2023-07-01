import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { Nav } from './Navigation.styled';
import { StyledNavLink } from 'components/shared-styles/nav-link.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {token && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Nav>
  );
};
