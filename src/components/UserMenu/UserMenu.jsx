import { LinkButton } from 'components/shared-styles/link-button.styled';
import { errorToast } from 'helpers/toasts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetUserQuery, useLogOutUserMutation } from 'redux/authApi';
import { selectToken } from 'redux/selectors';
import { setToken } from 'redux/tokenSlice';
import { UserMenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const { data } = useGetUserQuery(token);
  const [logOut] = useLogOutUserMutation();

  const handleClick = async () => {
    try {
      await logOut(token).unwrap();
      dispatch(setToken(null));
      navigate('/');
    } catch (error) {
      errorToast(error.error);
    }
  };

  return (
    <UserMenuWrapper>
      <p>{data && data.email}</p>
      <LinkButton type="button" onClick={handleClick}>
        LogOut
      </LinkButton>
    </UserMenuWrapper>
  );
};
