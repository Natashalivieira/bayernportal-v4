import styled from 'styled-components';
import Bayern from '../../Images/Bayern.jpg';

export const InfoSec = styled.div`
  padding-bottom: 100px;
  padding-top: 100px;
  background-image: url(${Bayern});
  background-size: cover;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-bottom: 60px;
    padding-top: 60px;
    
    }
  `;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  width: 100%;
  margin-right: 5;
  margin-left: 5;
  margin-top: 15;
  margin-bottom: 15;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    /* justify-content: center; */
    margin-right: 5;
  margin-left: 5;
  }
`;

export const InfoColumn = styled.div`
    height: 150px;
    padding-right: 5px;
    padding-left: 5px;
    max-width: 100%;
    background: #fff;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex-wrap;
    justify-content: center;
    padding-right: 5px;
    padding-left: 5px;
    padding-bottom: 40px;
    padding-top: 20px;
    

  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 40px;
    padding-top: 20px;
    padding-right: 5px;
    padding-left: 5px;
    

  }
`;

export const InfoColumn2 = styled.div`
    /* background: #0099D5; */
    height: 150px;
    padding-right: 5px;
    padding-left: 5px;
    max-width: 100%;
    background: #fff;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex-wrap;
    justify-content: center;
    padding-right: 5px;
    padding-left: 5px;
    padding-bottom: 40px;
    padding-top: 20px;
    

  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 40px;
    padding-top: 20px;
    padding-right: 5px;
    padding-left: 5px;
    

  }
`;

export const InfoColumn3 = styled.div`
  /* background: #0099D5; */
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 35%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 200px;
  padding-top: 15px;
  padding-bottom: 15px;
  @media screen and (max-width: 668px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? 'white' : 'black')};
  font-size: 22px;
  /* font-style: ; */
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-top: 20px;
  margin-bottom: 6px;
  
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 1px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#0099D5' : 'black')};
  
`;

export const Subtitle = styled.p`
  max-width: 440px;
  /* margin-bottom: 35px; */
  font-size: 15px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;