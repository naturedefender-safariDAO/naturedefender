import styled from "styled-components";
import { Link } from "react-router-dom";
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
  margin-left:5rem;
  margin-top: 3.5rem;
  flex-direction: row;


& img{
    margin-right:1rem;
    margin-top:0.5rem;
    width: 1.5rem;
    height:1.5rem;
}

& page-wrap {
    text-align: center;
    overflow: auto;
  }
  
  
& bm-item {
    display: inline-block;
    text-decoration: "#fff";
    margin-bottom: 10px;
    color: #fff;
    transition: color 0.2s;
  }
  
  
& bm-item:hover {
    color: #fff;
  }
  
  
  
  
& bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }
  
  
& bm-burger-bars {
    background: #fff;
  }
  
  
& bm-cross-button {
    height: 10px;
    width: 10px;
  }
  
  
& bm-cross {
    background: #1A1818;
  }

& bm-menu {
    background: #fff;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  
  
& bm-morph-shape {
    fill: #fff;
  }
  
  
& bm-item-list {
    color: #fff;
  }
  
& bm-overlay {
    background: rgba(0, 0, 0, 0.3);
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

export const MenuLabel = styled.label`
  position: relative;
  height: 3em;
  width: 3rem;
  cursor: pointer;
  z-index: 1000;
  margin-left: 2rem;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

export const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 3rem;
  height: 2px;
  display: inline-block;
 transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
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


export const TextContainer2 = styled.div`
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

