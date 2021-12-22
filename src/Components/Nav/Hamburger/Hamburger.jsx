import React from 'react';
import PropTypes from 'prop-types';

import { NavHamburger, StyledBurger } from './Hamburger.styled';

export const Hamburger = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavHamburger isOpen={isOpen}>{children}</NavHamburger>
    </>
  );
};
Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.element
};
