import { useEffect } from 'react';
import { useGetUserQuery } from 'redux/authApi';

export const UserMenu = () => {
  const { data } = useGetUserQuery();
  console.log(data);
  // useEffect(() => {

  // })
  return (
    <div>
      <p>Email goes here</p>
      <button type="button">LogOut</button>
    </div>
  );
};
