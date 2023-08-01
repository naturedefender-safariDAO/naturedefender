import styled from "styled-components";

export const FooterParent = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    background:#1A1818;

    
`;

export const CenterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background:#1A1818;
   

    
    
`;

export const SubscribeContainer = styled.div`
    width: 100vw;
    height: 50%;
   margin-left:25rem;
    
    
    
    & h3 {
      margin-top: 1rem;
      color: #ffffff;
      margin-left: 7rem;
      font-size:1.8rem;
      font-weight:700;
      margin-bottom:2rem;
      
      
  }

  
  & h4 {
    line-height:2rem;
    color: #ffffff;
    margin-left: 5rem;
    font-weight:200;
    
}
    & p {
      line-height:2rem;
      color: #ffffff;
      margin-left: 2rem;
      margin-bottom:2rem;
      
  }
    `;

   





export const ButtonContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
margin-left: 1rem;

`;


export const SearchBarContainer = styled.div`
  display: flex;
  width:  50%;
  height: 15%;
  margin-left: 3rem;
  
`;

export const SearchBarForm = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  height: 90%;
 background: #1A1818;

  & .search-input {
    border: 0;
    outline: none;
    background: #1A1818;
    color: #fff;
    font-size: 1rem;
    margin-left:3rem;
    

  }
  & .search-input::placeholder {
    color: #fff;
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-top: 2rem;
  }
  
`;

export const Button = styled.button`
background:#B98D63;
width:5rem;
border: 1px solid #B98D63; 
border-radius:5px;
color:#ffffff;
height: 1.8rem;
align-items: center;
margin-top:0.275rem;
margin-bottom:0.25rem;
font-size: 1rem;
display:flex;
margin-left:10.5rem;


`;


