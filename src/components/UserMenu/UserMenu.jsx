import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { authApi, useGetUserQuery } from 'redux/authApi';
import { selectToken } from 'redux/selectors';

export const UserMenu = () => {
  const token = useSelector(selectToken);
  const { data } = useGetUserQuery({ skip: !token });
  console.log(data);

  return (
    <div style={{ display: 'flex' }}>
      <p>Email goes here</p>
      <button type="button">LogOut</button>
    </div>
  );
};
