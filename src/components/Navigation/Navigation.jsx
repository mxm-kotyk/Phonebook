import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

export const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {token && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
