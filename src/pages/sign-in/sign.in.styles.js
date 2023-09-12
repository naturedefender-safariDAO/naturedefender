import styled from "styled-components";
import {device} from "../../utils/device";

export const SigninParent = styled.div`
    width: 110vw;
    height: 250vh;
    display: flex;
    flex-direction: column;
    background:#1A1818;

     `;

export const SigninWrapper = styled.div`
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
    width: 100vw;
    height: 100vh;
    display: flex;
    background:#1A1818;
    margin-left:2rem;
   
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
 
  & link {
        color: #FFF;
    }

  & link:hover {
         color: #00F;
      }
    

     
    `;


export const FormHeader = styled.div`
    width: 80%;
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



     
   
   


  