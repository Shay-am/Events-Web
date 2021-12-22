import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: white;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 8rem;
  border-bottom: 2px solid grey;
`;

export const HeadingSpan = styled.span`
  font-size: ${({ small }) => (small ? '1.5rem' : '2.4rem')};
  color: black;
  padding: 0 0.3rem;
  margin: ${({ small }) => (small ? '1rem 0 0 2.5rem' : '1rem 0 0 2rem')};
`;
