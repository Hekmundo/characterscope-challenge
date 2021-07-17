import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  background-color: #fefefe;
  position: relative;
  z-index: 1;
  margin: 0.67em 1em 50px;
`;

export const ArrowContainer = styled.button`
  cursor: pointer;
  margin-top: 40px;
  fill: #333;
  opacity: 0.4;
  width: 50px;
  transform: rotate(90deg);
  position: absolute;
  bottom: 5vh;
  animation: hint;

  &:hover {
    opacity: 1;
  }
`;
