import styled from 'styled-components';

export const StyledBurger = styled.div`
  display: none;
  position: absolute;
  top: 1%;
  right: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  align-items: center;

  &:focus {
    outline: none;
  }

  div {
    display: none;
    width: 2.5rem;
    height: 0.35rem;
    background: grey;
    border-radius: 10px;
    margin-bottom: 0.5rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 3px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? `rotate(55deg)` : `rotate(0)`)};
    }

    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-55deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: 500px) {
    div {
      display: block;
    }
    display: block;
  }
`;

export const NavHamburger = styled.nav`
  display: none;
  position: absolute;
  top: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(200%)')};
  right: 1px;
  width: 30rem;
  height: 100vh;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 500px) {
    display: block;
  }
  @media (max-width: 400px) {
    width: 100vw;
  }
`;
