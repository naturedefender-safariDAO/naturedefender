import styled from "styled-components";
import { device } from "../../utils/device";


export const HomeParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background:#1A1818;
`;

export const HomeWrapper = styled.div`
     width: 100vw;
     height: 90vh;
     display: flex;
     flex-direction: column;
     background:#1A1818;

 @media ${device.laptopL} { 
    max-width: 1400px;
    }

 @media ${device.desktop} {
    max-width: 2500px;
    }
    
`;



export const BarWrapper = styled.div`
      width: 100vw;
      height: 10vh;
      display: flex;
      flex-direction: column;
      margin-top:2rem;
      margin-left:2rem;
      margin-bottom:3rem;
      `;

export const CentreWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:#1A1818;
 
   
      `;



export const TextContainer = styled.div`
width: 50vw;
position: absolute;
top: 90%;
left: 20%;
margin-left:10rem;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;



`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top:15rem;
    margin-left:4rem;
    
    
`;

export const GButton = styled.button`
display: flex;
background:#DA8450;
width:8rem;
border: 1px solid #DA8450; 
border-radius:5px;
color:#ffffff;
height: 2.5rem;
align-items: center;
justify-content: center;


`;

export const LButton = styled.button`
display: flex;
background: #50561F;
width:8rem;
border: 1px solid  #50561F; 
border-radius:5px;
color:#ffffff;
height: 2.5rem;
align-items: center;
justify-content: center;
margin-left:1rem;


`;


export const NatureWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#1A1818;
align-items: center;
padding-top: 10rem; 
margin-top:22rem;     
`;

export const ProjectsWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#1A1818;
align-items: center;
padding-top: 10rem; 
margin-top:35rem;     
`;

export const LatestWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#1A1818;
align-items: center;
padding-top: 15rem; 
margin-top:50rem;     
`;

export const TheonesWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#1A1818;
align-items: center;
padding-top: 10rem; 
margin-top:35rem;     
`;



export const FooterWrapper = styled.div`
width: 100%;
height: 50%;
display: flex;
background:#1A1818;
align-items: center;
 
 
`;

export const SubfooterWrapper = styled.div`
width: 100%;
height: 30%;
display: flex;
background:#1A1818;
align-items: center;

 
`;

