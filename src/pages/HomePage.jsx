import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Welcome to Phonebook</h1>
      <button type="button" onClick={() => navigate('/login')}>
        LogIn
      </button>
      <button type="button" onClick={() => navigate('/register')}>
        Register
      </button>
    </>
  );
}

export default HomePage;
