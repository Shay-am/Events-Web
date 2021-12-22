import React, { useState } from 'react';
import { Hamburger } from './Hamburger/Hamburger';
import { Menu } from './Menu/Menu';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
