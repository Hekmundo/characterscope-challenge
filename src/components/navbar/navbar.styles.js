import styled, { css } from 'styled-components';

const containerStyles = css`
  display: flex;
  align-items: center;
`;

export const CompanyName = styled.span`
  color: #777;
  font-size: 18px;
  margin-left: 5px;
`;

export const LogoContainer = styled.div`
  ${containerStyles}
  padding: 10px;
  cursor: pointer;

  &:hover {
    ${CompanyName} {
      color: #333;
    }
  }
`;

export const NavContainer = styled.nav`
  ${containerStyles}
  justify-content: center;
  padding: 0 2vw;
  background-color: ${(props) => (props.dark ? '#f8f8f8' : '#fefefe')};
  border-bottom: 1px solid #e7e7e7;
  @media screen and (min-width: 600px) {
    padding: 0 10vw;
  }
`;
