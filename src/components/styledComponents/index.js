import styled from 'styled-components';
import { Card } from 'antd';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 0 20px;
  background-color: #e5e5e5;
`;

export const RadioBWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 232px;
  background-color: #fff;
  height: 252px;
  margin-top: 20px;
  .RadioBItem {
    padding-top: 18px;
    padding-left: 18px;
  }
`;

export const StyledTicket = styled(Card)`
  width: 500px;
  @media (max-width: 505px) {
    width: 100%;
  }
`;
export const OutPutWindowWrapper = styled.div`
    margin: 0 20px;
    display:flex;
    width: 500px;
     @media (max-width: 505px) {
         margin: 0;  
         width:100%;
     } 
    flex-direction: column;
    justify-content: center;
    .OutPut-button {
        width:50%;
        height: 50px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .OutPut-loader {
        display:flex;
        justify-content: center;
        align-content: center;
        margin-top: -15px;
        width: 500px;
        @media (max-width: 505px) {
            width: 100%;
         }
    } 
    .mainTicketWrapper {
        padding-bottom: 20px;
    }
    .ticketWrapper {  
        display: flex
        flex-direction: row
        flex-wrap: wrap
     }
    .greyText {  
        color: #A0B0B9
        width: 30%
        display: block
    }
    .blackText { 
         color: #4A4A4A
         width: 30%
         display: block
    }
    .centred {  
        text-align: center
    }

     
`;

export const MainLogoWrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
  margin-top: 50px;
`;

export const MainLogoImg = styled.img`
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto;
`;
