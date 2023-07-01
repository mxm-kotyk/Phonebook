import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { Header } from './AppBar.styled';
import { Container } from 'components/shared-styles/container';

export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <Container>
      <Header>
        <Navigation />
        {token ? <UserMenu /> : <AuthNav />}
      </Header>
    </Container>
  );
};
