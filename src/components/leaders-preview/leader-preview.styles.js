import styled from 'styled-components';

export const LeadersContainer = styled.div`
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  box-sizing: border-box;
  margin-bottom: 20px;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    padding-left: 20px;
    padding-right: 20px;
    width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 900px;
  }
`;
