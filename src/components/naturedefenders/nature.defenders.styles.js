import styled from "styled-components";


export const NatureParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#1A1818;

     `;

export const NatureWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:#1A1818;
 
    
      `;

      export const SummaryContainer = styled.section`
      width: 100%;
      height: 50%;
      display: flex;
      gap: 1.5rem;
      justify-content: space-around;
      align-items: center;
      margin-top:1rem;
    `;
    
    export const Header = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
    margin-left:12rem;
    margin-top:7rem;

    & h2 {
        color: #fff;
        font-size:2.5rem;
        line-height:0.5rem;
     }

     & img {
      margin-top:1rem;
     }
       
    `;



    export const SummaryCard = styled.div`
      width: 25%;
      height: 80%;
      display: flex;
      flex-direction: column;
      padding: 1rem 1rem;
      background: #110A03;
      border: 1px solid #110A03;
      border-radius: 12px;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
    
      & p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3rem;
        color: #fff;
        margin-left:1rem;
      }
    
      & h1 {
        font-weight: 500;
        font-size: 1rem;
        color: #fff;
        margin-left:4rem;
      }

      & h3 {
        font-weight: 500;
        font-size: 1rem;
        color: #fff;
        margin-left:7rem;
      }

      & img{
        margin-left: 9rem;
        

      }
    `;