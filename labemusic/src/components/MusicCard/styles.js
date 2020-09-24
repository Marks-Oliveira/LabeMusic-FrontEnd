import styled from "styled-components";

// Estilos MusicCardInfo

export const MusicCardInfoWrapper = styled.div `
  padding: 8px;
`;

export const Image = styled.img `
  width: 320px;
  height: 50px;
`;

// Estilos MusicCardFullInfo
export const ModalWrapper = styled.div `
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageModal = styled.img `
  width: 550px;
  height: 50px;
`;

export const Container = styled.div `
  background-color: white;
  width: 35%;
  height: 38%;
  border-radius: 6px;
`;

export const CloseButton = styled.div `
  display: flex;
  justify-content: flex-end;
  padding: 15px;
`;