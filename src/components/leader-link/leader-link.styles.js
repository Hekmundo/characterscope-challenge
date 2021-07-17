import styled from 'styled-components';

export const LeaderTypeContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const HeaderUnderline = styled.div`
  height: 2px;
  background-color: ${(props) => props.colour};
  width: 0;
  transition: all 0.3s ease-in-out;
`;

export const LeaderLinkHeader = styled.h3`
  text-align: center;
  display: table-caption;
  position: relative;
  z-index: 1;
`;

export const LeaderLinkContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    ${LeaderLinkHeader} {
      /* color: ${(props) => props.colour}; */
    }

    ${HeaderUnderline} {
      width: 100%;
    }
  }
`;
