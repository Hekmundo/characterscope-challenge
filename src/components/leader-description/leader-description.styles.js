import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

export const LeaderDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 25px;
  font-size: 1.2rem;
  max-width: 850px;
  margin: 0 auto;
`;

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;

  @media screen and (min-width: 600px) {
    justify-content: center;
  }
`;

export const LeaderHeader = styled.h1`
  color: ${(props) => props.colour};
  font-weight: 600;
  font-size: 7vw;
  margin-left: 10px;

  @media screen and (min-width: 600px) {
    font-size: 2.5em;
    max-width: 10ch;
  }
`;

export const LeaderImage = styled.img`
  width: 35vw;
  height: 35vw;
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.height}px;
`;

export const ParagraphAndListContainer = styled.div`
  @media screen and (min-width: 700px) {
    display: flex;
    flex-direction: reverse;
    justify-content: center;
    align-items: center;
    margin: 2em 0;
  }
`;

export const ParagraphSection = styled.section`
  @media screen and (min-width: 700px) {
    flex: 1 1;
    padding-left: 30px;
    padding-right: 30px;
    text-align: right;
  }
`;

export const ParagraphHeader = styled.h3`
  font-weight: 600;
  font-size: 1.3em;
  max-width: 20ch;

  @media screen and (min-width: 700px) {
    margin-left: auto;
  }
`;

export const DescriptionParagraph = styled.p`
  margin-bottom: 2em;
  font-size: 0.9em;
  line-height: 1.4em;
`;

export const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px 10px;
  width: 100%;
  border: 1px solid #eee;
  border-left: 3px solid ${(props) => props.colour};
  border-radius: 3px;
  box-shadow: 5px 5px 5px #ddd;
  box-sizing: border-box;
  flex: 1 1;
`;

export const ListHeader = styled.h4`
  font-size: 1.2em;
  margin-bottom: 0;
`;

export const HeaderUnderline = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.colour};
`;

export const List = styled.ul`
  margin: 1em 0;
`;

export const ListItem = styled.li`
  margin: 5px;
`;

export const StyledArrow = styled(Arrow)`
  transform: rotate(180deg);
  height: 14px;
  fill: #fff;
  margin-right: 6px;
`;

export const BackButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  background-color: #f30b6f;
  border: 2px solid #db0a64;
  border-radius: 3px;
  padding: 8px 10px;
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.8em;
  font-family: 'Cabin', sans-serif;

  transition: all ease 200ms;

  &:hover {
    background-color: #fff;
    color: #f30b6f;

    ${StyledArrow} {
      fill: #f30b6f;
    }
  }
`;
