import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  background: '#fff';
  width: 100%;
  max-width: 1500px;
  /* margin-right: auto;
  margin-left: auto; */
  padding-right: 65px;
  padding-left: 65px;
  @media screen and (max-width: 1024px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#005D85' : 'grey')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '8px 2px' : '2px 4px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '18px' : '16px')};
  outline: none;
  border: none;
  width: 150px !important;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? 'grey' : '#005D85')};
  }
  @media screen and (max-width: 768px) {
    width: 100% !important;
    
  }
`;

export default GlobalStyle;