import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetUserQuery } from 'redux/authApi';
import { selectToken } from 'redux/selectors';

function HomePage() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const { data } = useGetUserQuery(token);

  if (token) {
    return (
      <>
        <h1>Welcome to your Phonebook, {data && data.name}</h1>
      </>
    );
  }

  if (!token) {
    return (
      <>
        <h1>Welcome to Phonebook</h1>
        <p>
          Please
          <button type="button" onClick={() => navigate('/login')}>
            LogIn
          </button>
          to continue
        </p>
      </>
    );
  }
}

export default HomePage;
