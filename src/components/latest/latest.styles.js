import styled from "styled-components";


export const LatestParent = styled.div`
    width: 100vw;
    height: 200vh;
    display: flex;
    flex-direction: column;
    background:#1A1818;

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
    margin-top:3rem;

    & h2 {
        color: #fff;
        font-size:2.5rem;
        line-height:0.5rem;
     }
      
     & img {
      margin-top:1rem;
     }

    `;



export const LatestWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:#1A1818;
 
    
      `;

export const SummaryWrapper = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction:row;
     background:#1A1818;
 
    
      `;


export const SummaryContainer1 = styled.div`
      width: 50%;
      height: 90%;
      display: flex;
      gap: 0.5rem;
      justify-content: space-around;
      align-items: center;
      margin-top:7rem;
      margin-left:5rem;
    `;

export const SummaryContainer2 = styled.div`
    width: 25%;
    flex direction:column;
    margin-top:7rem;

     & img{
      margin-top:1rem;
     }
     
      
    `;

export const SummaryContainer3 = styled.div`
      width: 25%;
      height: 90%;
      margin-top:9rem;
      padding-right:10px;
     
      & h4 {
        color:#fff;

      }

      & p{
        color:#fff;
        font-size:0.9rem;
      }
      
      & h3{
        font-size:1rem;
        margin-top:5rem;
        color:#fff;
      }

    
    `;

