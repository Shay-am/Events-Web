import React from 'react';
import { bool, func } from 'prop-types';
import { NavHamburger, StyledBurger } from './styles';

export const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <StyledBurger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavHamburger isOpen={isOpen}> cos</NavHamburger>
    </>
  );
};
Hamburger.propTypes = {
  isOpen: bool.isRequired,
  setIsOpen: func.isRequired
};
