import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  justify-content: space-around;
  margin-top: 1rem;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const NavLinksCointar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-start: 3;
  gap: 2vw;
`;

export const NavRightContainer = styled(NavLinksCointar)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-start: 17;
`;

export const NavLinkItem = styled(NavLink)`
  font-size: calc(1rem + 1vmin);
  color: ${({ theme }) => theme.color.navItem};
  list-style: none;
  text-decoration-line: none;
  text-align: center;

  &.active {
    text-decoration-line: underline;
  }
`;

export const StyledNavItem = styled(NavLinkItem)`
  grid-column-start: 13;
  min-width: 10vw;
  font-size: calc(1.3rem + 1vmin);
`;
