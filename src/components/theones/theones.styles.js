import styled from "styled-components";


export const TheonesParent = styled.div`
    width: 100vw;
    height: 200vh;
    display: flex;
    flex-direction: column;
    background:#1A1818;

     `;

export const TheonesWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:#1A1818;
 
    
      `;

      

    export const SummaryContainer = styled.section`
      width: 90%;
      height: 45%;
      display: flex;
      gap: 0.5rem;
      justify-content: space-around;
      align-items: center;
      margin-top:7rem;
      margin-left:5rem;
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
      
     
    & h3 {
        color: #fff;
        font-size:2.5rem;
        line-height:4rem;
     }

     
    `;

  