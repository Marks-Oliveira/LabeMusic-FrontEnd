import styled from "styled-components";
import backgroundMusic from "./images/background-music.jpg";

export const AppWrapper = styled.div `
  display: grid;
  place-content: center;
  height: 100%;
  min-height: 100vh;
  background-image: url("${backgroundMusic}");
  background-size: 100% 100%;
`;
