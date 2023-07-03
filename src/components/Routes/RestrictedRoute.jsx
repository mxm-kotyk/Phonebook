import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectToken } from 'redux/selectors';

export const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const token = useSelector(selectToken);

  return token ? <Navigate to={redirectTo} /> : component;
};
