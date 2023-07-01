import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetUserQuery } from 'redux/authApi';
import { selectToken } from 'redux/selectors';
import {
  AnimatedText,
  HomepageWrapper,
  MainText,
  SecondaryText,
} from './HomePage.styled';
import { LinkButton } from 'components/shared-styles/link-button.styled';

function HomePage() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const { data } = useGetUserQuery(token);

  if (token) {
    return (
      <HomepageWrapper>
        <MainText>
          Welcome to your <AnimatedText>Phonebook</AnimatedText>,{' '}
          {data && data.name}
        </MainText>
      </HomepageWrapper>
    );
  }

  if (!token) {
    return (
      <HomepageWrapper>
        <MainText>
          Welcome to <AnimatedText>Phonebook</AnimatedText>
        </MainText>
        <SecondaryText>
          Please{` `}
          <LinkButton type="button" onClick={() => navigate('/login')}>
            LogIn
          </LinkButton>
          {` `}to continue
        </SecondaryText>
      </HomepageWrapper>
    );
  }
}

export default HomePage;
