import styled from "styled-components";
import { Link } from "react-router-dom";


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

    
 
      `;



export const NavContainer = styled.div`
   width: 100%;
    height: 20%;
    display: flex;
    position: relative;
    flex-direction: column;
    background:#1A1818;


   

     `;

export const NavWrapper = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     

     
 
     
 
      `;

export const LogoContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 5rem;
  

    & img {
    width: 3rem;
    margin-top:3rem;
    }

    h1{
        font-size:1.5rem;
        color:#fff;
       margin-left: 1rem;
       margin-top:3.5rem;
        
    }
    
    `;

 
export const BigLinkContainer = styled.div`
    display: flex;
    margin-left: 5rem;
    

   
    
     
    `;

export const NavbarLink = styled(Link)`
 color:white;
 font-size: 1rem;
 font-family: sans-serif;
 text-decoration: none;
 color: #fff;
 margin-left:3rem;
 margin-top:5rem;
 

& focus{
    color: white;
}
& active{
    color: #fff;
}

`;


export const ButtonWrapper = styled.div`
display:flex;
margin-left:7rem;
margin-top: 3.5rem;


& img{
    margin-right:1rem;
    margin-top:0.5rem;
    width: 1.5rem;
    height:1.5rem;
}

`;

export const Button = styled.button`
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

export const CentreWrapper = styled.div`
     width: 100vw;
     height: 100vh;
     display: flex;
     flex-direction: column;
     background:#1A1818;
 
   
      `;
export const Overlay = styled.div`
      width: 100vw;
      height: 147vh;
      display: flex;
      flex-direction: column;
      z-index:auto;
      justify-content: center;
      position: absolute;
      background: rgba(60, 0, 0, 0.5);
      content: '';
      `;


export const TextContainer= styled.div`
width: 50vw;
position: absolute;
top: 90%;
left: 20%;
margin-left:10rem;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;

& h1{
font-weight:700;
line-height:5rem;
font-size:3rem;
font-family: Sans-Serif;
color:  #fff;

}

& h2{
    font-weight:700;
    line-height:3rem;
    font-size:3rem;
    font-family: Sans-Serif;
    color:  #fff;
    margin-left:3.9rem;
    line-height:1rem;
    
    }

& h3 {
    font-weight:400;
    font-size:1.2rem;
    line-height:2rem;
    font-family: Sans-Serif;
    color:#fff;
    margin-left:4rem;
    
}


`;

export const ButtonContainer = styled.div`
    display: flex;
    margin-top:1.5rem;
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

export const LineContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:19rem;
    width:100%;

    & img{
        margin-right:1rem;
        margin-left:1rem;
        
    }
    
    
    
    
`;


export const TextContainer2= styled.div`
width: 50vw;
position: absolute;
top: 140%;
left: 80%;
margin-left:10rem;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;



& p {
    font-weight:300;
    font-size:1rem;
    line-height:2rem;
    font-family: Sans-Serif;
    color:#fff;
    
}



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

