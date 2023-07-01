import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetUserQuery, useLogOutUserMutation } from 'redux/authApi';
import { selectToken } from 'redux/selectors';
import { setToken } from 'redux/tokenSlice';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const { data } = useGetUserQuery(token);
  const [logOut, { error }] = useLogOutUserMutation();

  const handleClick = async () => {
    // try {
    await logOut(token).unwrap();
    dispatch(setToken(null));
    navigate('/');
    if (error) console.log(error);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <p>{data && data.email}</p>
      <button type="button" onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
};
