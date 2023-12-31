import styled from "styled-components";
import {device} from "../../utils/device";

export const SignupParent = styled.div`
    width: 110vw;
    height: 250vh;
    display: flex;
    flex-direction: column;
    background:#1A1818;

     `;

export const SignupWrapper = styled.div`
    width: 100vw;
    height: 150vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background:#1A1818;

    @media ${device.laptopL} { 
        max-width: 1400px;
        }
    
    @media ${device.desktop} {
        max-width: 2500px;
        }
     @media ${device.tablet} {
        max-width: 768px;
            }
     @media ${device.mobileL} {
                max-width: 425px;
                }
     @media ${device.mobileM} {
             max-width: 375px;
                    }
     @media ${device.mobileS} {
             max-width: 320px;
                        }

    `;


    export const Wrapper = styled.div`
    width: 85vw;
    height: 80vh;
    display: flex;
    background:#1A1818;
    margin-left: 2rem;
   
    & h3 {
        margin-top:2rem;
        font-size:1.5rem;
        font-weight:450;
        line-height:0.1rem;
        color:#fff;
        margin-left:5rem;
    
        
    }
   
    & form {
        width: 60%;
        height: 80%;
        margin-left: 8rem;
        margin-top:3rem;
        color:#fff;
        
    }
    & h4 {
        margin-top:1rem;
        font-size:1rem;
        font-weight:450;
        line-height:1rem;
        color:#fff; 
    }
    
    & p {
        color:#fff;
        line-height:1.5rem;
    }
    `;


    export const FormHeader = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    align-content: center;
      
    & img {
        margin-top:1rem;
        }

    `;

    export const Select = styled.select`
    width: 75%;
    height:10%;
    background: #1A1818;
    color: white;
    border:1px solid white;
    border-radius: 5px;
    margin-top: 1rem;
    margin-bottom: 1rem;
   
  
         option {
           color: #fff;
           background: #1A1818;
           font-weight: 200;
           display: flex;
           min-height: 20px;
           padding: 1px 2px 1px;
         }
  `;
  

     
   
   


  