import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
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
  &.active {
    color: #dc6000;
  }
`;
