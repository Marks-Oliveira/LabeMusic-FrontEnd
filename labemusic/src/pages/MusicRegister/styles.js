import styled from "styled-components";

export const MusicRegisterWrapper = styled.div `
  padding: 16px;
`;

export const MusicRegisterContainer = styled.div `
  border: 1px solid black;
  padding: 16px;
  height: 105vh;
  margin-top: 10px;
  box-shadow: 10px 10px 40px -10px rgba(0,0,0,0.61);
  border-radius: 20px;
  background-color: #FFFAFA;
`;

export const Title = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const LinkToMusics = styled.div `
  cursor: pointer;
  padding: 8px;
`;

export const CheckboxContainer = styled.div `
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around ;
`; 