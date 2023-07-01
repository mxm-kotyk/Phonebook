import styled from 'styled-components';

export const LinkButton = styled.button`
  padding: 0;
  cursor: pointer;
  background: 0 0;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-decoration: underline;
  color: #204154;
  transition: all 150ms ease;

  &:focus-visible {
    color: #6998aa;
  }
  &:active {
    color: #051839;
  }

  @media (hover: hover) {
    &:hover {
      color: #6998aa;
    }
  }
`;
