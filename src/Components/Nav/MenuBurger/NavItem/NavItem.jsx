import React from 'react';
import PropTypes from 'prop-types';
import { Icon, NavitemCointaner, NavLinkItem } from './NavItem.styled';

export const NavItem = ({ component: Component, redirect, name }) => {
  return (
    <NavitemCointaner>
      <Icon>
        <Component />
      </Icon>
      <NavLinkItem to={redirect}>{name}</NavLinkItem>
    </NavitemCointaner>
  );
};
NavItem.propTypes = {
  component: PropTypes.any,
  redirect: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired
};
