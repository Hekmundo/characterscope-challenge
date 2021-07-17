import styled from 'styled-components';

export const LeaderLinkHeader = styled.h3`
  text-align: right;
`;

export const LeaderLinkContainer = styled.div`
  cursor: pointer;

  &:hover {
    ${LeaderLinkHeader} {
      color: ${(props) => props.colour};
      text-decoration: underline;
    }
  }
`;
