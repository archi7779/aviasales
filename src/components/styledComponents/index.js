import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: #e5e5e5;
`;

export const RadioBWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 232px;
  background-color: #fff;
  height: 252px;
  margin-right: 20px;
  .RadioBItem {
    padding-top: 18px;
    padding-left: 18px;
  }
`;

export const OutPutWindowWrapper = styled.div`
    .OutPut-button {
        width:50%;
        height: 50px;
        margin-bottom: 20px
    }
    .OutPut-loader {
        display:flex;
        justify-content: center;
        align-content: center;
        margin-top: -15px;
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
  padding-bottom: 50px;
  margin-top: 50px;
`;

export const MainLogoImg = styled.img`
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto;
`;
