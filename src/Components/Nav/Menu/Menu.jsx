import React from 'react';
import { Wrapper, NavLinkItem, NavLinksCointar, NavRightContainer, StyledNavItem } from './styles';

export const Menu = () => {
  return (
    <>
      <Wrapper>
        <NavLinksCointar>
          <NavLinkItem to="/">Home</NavLinkItem>
          <NavLinkItem to="/news">News</NavLinkItem>
          <NavLinkItem to="/trial">Trial</NavLinkItem>
          <NavLinkItem to="/contact">contact</NavLinkItem>
        </NavLinksCointar>
        <StyledNavItem to="/contact">Create Event</StyledNavItem>
        <NavRightContainer>
          <NavLinkItem to="/login">Login</NavLinkItem>
          <NavLinkItem to="/register">Register</NavLinkItem>
        </NavRightContainer>
      </Wrapper>
    </>
  );
};
