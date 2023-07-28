import React from "react";
import {
  ProductDiv,
  ResourcesDiv,
  SubcenterWrapper,
  ConnectDiv,
  SubfooterParent,
  LogoContainer,
  OthersContainer,
  CompanyDiv,
  SocialDiv
} from "./subfooter.styles";
import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.png";
import discord from "../../assets/discord.png";
import mail from "../../assets/mail.png";


const Subfooter = () => {
  return (

    <SubfooterParent>
      <SubcenterWrapper>
        
          <OthersContainer>
        <ProductDiv>
          <h1>Product</h1>
          <p><br></br>Features
          <br></br>Workload
          <br></br>Time</p>

        </ProductDiv>
        <CompanyDiv>
            <h1>Company</h1>
            <p><br></br>Real Work
            <br></br>About & Contact
            <br></br>Careers</p>
        </CompanyDiv>
        <ResourcesDiv>
          <h1>Resources</h1>
         <p> <br></br>Blog
          <br></br>Help & About
          <br></br>Customer</p>

        </ResourcesDiv>
        <ConnectDiv>
        <LogoContainer>
            <img src={logo} alt="logo"  width={50}/>
            <h2>NatureDefenders</h2>
           
          </LogoContainer>
        <h6>Shaping a Sustainable World</h6>
          <SocialDiv>
        <img src ={twitter} alt="twitter"/>
         <img src={discord} alt="discord"/>
         <img src={mail} alt="discord"/>
         </SocialDiv>
          
        </ConnectDiv>
        </OthersContainer>
      </SubcenterWrapper>
    </SubfooterParent>
  )



}

export default Subfooter;