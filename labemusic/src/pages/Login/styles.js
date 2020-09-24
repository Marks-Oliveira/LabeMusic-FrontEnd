import styled, { keyframes } from "styled-components";

export const LoginContainer = styled.div `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  border: 1px solid black;
  padding: 32px;
  grid-column-gap: 40px;
  box-shadow: 10px 10px 40px -10px rgba(0,0,0,0.61);
  border-radius: 20px;
  background-color: #FFFAFA;
`;

export const ImageContent = styled.div `
  grid-row: 1/-1;
  grid-column: 1;
  place-self: center;
`;

export const LoginContent = styled.div `
  grid-row: 1/-1;
  grid-column: 2;
  place-self: center;
`;

export const LinkToSignup = styled.div `
  cursor: pointer;
  padding: 8px;
`;

export const AvatarContent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const swirlIn = keyframes `
  100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateX(-30px) rotate(-6deg);
  }
  30% {
    transform: translateX(15px) rotate(6deg);
  }
  45% {
    transform: translateX(-15px) rotate(-3.6deg);
  }
  60% {
    transform: translateX(9px) rotate(2.4deg);
  }
  75% {
    transform: translateX(-6px) rotate(-1.2deg);
  }
`;

export const ImageLogo = styled.img `
  animation: ${swirlIn} 2s infinite;
`;
