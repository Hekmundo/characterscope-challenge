import styled from 'styled-components';

export const LeaderTypeContainer = styled.div`
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 600px) and (max-width: 900px) {
    &:last-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`;

export const HeaderUnderline = styled.div`
  height: 2px;
  background-color: ${(props) => props.colour};
  width: 0;
  transition: all 0.3s ease-in-out;
`;

export const LeaderLinkHeader = styled.h3`
  text-align: center;
  margin-top: 0.5em;
  font-size: 1.2rem;
  display: table-caption;
  position: relative;
  z-index: 1;
`;

export const LeaderLinkContainer = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    ${LeaderLinkHeader} {
      color: ${(props) => props.colour};
    }

    ${HeaderUnderline} {
      width: 100%;
    }
  }
`;
