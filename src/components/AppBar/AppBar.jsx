import AuthNav from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';

export const AppBar = () => {
  const token = useSelector(selectToken);

  return (
    <header style={{ display: 'flex' }}>
      <Navigation />
      {token ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
