import styled from "styled-components";

export const MusicWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MusicContainer = styled.div `
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-shadow: 10px 10px 40px -10px rgba(0,0,0,0.61);
  border-radius: 20px;
  border: 1px solid black;
  background-color: #FFFAFA;
`;

export const ButtonContainer = styled.div `
  display: flex;
  justify-content: center;
  top: 0;
  padding-top: 60px;
  position: absolute;
`;

export const MusicCardContainer = styled.div `
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;