import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavitemCointaner = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr;
  width: 12rem;
`;

export const NavLinkItem = styled(NavLink)`
  font-size: calc(2rem + 1vmin);
  color: ${({ theme }) => theme.color.navItem};
  list-style: none;
  text-decoration-line: none;
  text-align: left;

  &.active {
    text-decoration-line: underline;
  }
`;

export const Icon = styled.div`
  width: 100%;
  height: 100%;
`;
