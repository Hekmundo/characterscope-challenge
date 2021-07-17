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

export const MenuRow = styled.span`
  height: 2px;
  width: 22px;
  background-color: #888;
  margin: 2px 0;
`;

export const MenuButton = styled.button`
  ${containerStyles}
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 8px 10px;
  margin-right: 10px;

  &:hover {
    background-color: #ddd;
  }
`;

export const NavContainer = styled.nav`
  ${containerStyles}
  justify-content: space-between;
  padding: 0 2vw;
`;
