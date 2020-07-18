import styled from 'styled-components';

import { color, radius, font } from '../../utils/Styles';

export const Submit = styled.button`
  padding: 9px 60px;
  ${font.bold}
  ${font.size(20)}
  color: ${color.textDark};
  background-color: ${color.buttonGreen};
  border-radius: ${radius.buttonRadius};
  border: none;

  &:hover {
    cursor: pointer;
    color: ${color.buttonGreen};
    background-color: transparent;
    border: 2px solid ${color.buttonGreen};
    padding: 7px 59px;
  }
`;

export const Comment = styled.button`
  padding: 5px 15px;
  max-width: 150px;
  ${font.medium}
  ${font.size(18)};
  color: ${color.textSubHeading};
  background-color: ${color.buttonPurple};
  border-radius: ${radius.progressRadius};
  border: none;

  &:hover {
    cursor: pointer;
    box-shadow: inset 0px 0px 5px rgba(238, 238, 238, 1);
  }
`;

export const DetailOutline = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: ${color.tabBackgroundLight};
  }

  & div {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin: 0 2px;
    background-color: ${color.textParagraph};
  }
`;
