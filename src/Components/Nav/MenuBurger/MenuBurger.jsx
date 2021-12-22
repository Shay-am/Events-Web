import React from 'react';
import { Wrapper, Heading, HeadingSpan } from './MenuBurger.styled';
import { NavItem } from './NavItem/NavItem';
import { HomeLogo, ContactLogo, NewsLogo, TrialLogo } from '../../../assets/icons';

export const MenuBurger = () => {
  return (
    <Wrapper>
      <Heading>
        <HeadingSpan>Mateusz</HeadingSpan>
        <HeadingSpan small>shay@wp.pl</HeadingSpan>
      </Heading>
      <NavItem component={HomeLogo} redirect={'/'} name="Home" />
      <NavItem component={NewsLogo} redirect={'/news'} name="News" />
      <NavItem component={TrialLogo} redirect={'/trial'} name="Trial" />
      <NavItem component={ContactLogo} redirect={'/contact'} name="Contact" />
    </Wrapper>
  );
};
