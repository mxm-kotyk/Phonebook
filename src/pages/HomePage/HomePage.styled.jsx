import styled from 'styled-components';

export const HomepageWrapper = styled.div`
  margin: auto;
  height: 400px;
  width: 100%;
  max-width: 1000px;
  display: grid;
  place-items: center;
  align-content: center;
`;

export const MainText = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
`;

export const SecondaryText = styled.h1`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
`;

export const AnimatedText = styled.span`
  --bg-size: 400%;
  /* --color-one: #c75715;
  --color-two: #ff7906;
  --color-three: #d86b28; */
  --color-one: #204154;
  --color-two: #6998aa;
  --color-three: #051839;
  background: linear-gradient(
      90deg,
      var(--color-one),
      var(--color-two),
      var(--color-three),
      var(--color-one)
    )
    0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: move-bg 8s infinite linear;

  @keyframes move-bg {
    to {
      background-position: var(--bg-size) 0;
    }
  }
`;
