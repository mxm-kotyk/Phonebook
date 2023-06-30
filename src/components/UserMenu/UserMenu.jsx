import { useDispatch, useSelector } from 'react-redux';
import { useGetUserQuery, useLogOutUserMutation } from 'redux/authApi';
import { selectToken } from 'redux/selectors';
import { setToken } from 'redux/tokenSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const { data } = useGetUserQuery(token);
  const [logOut] = useLogOutUserMutation();

  const handleClick = async () => {
    try {
      await logOut(token).unwrap();
      dispatch(setToken(''));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <p>{data && data.email}</p>
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};
