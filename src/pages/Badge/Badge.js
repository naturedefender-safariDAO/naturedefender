import React from "react";
import {
    NftParent,
    NftWrapper,
    Header,
    SubfooterWrapper,
    BarWrapper,
    SummaryContainer1,
    Button,
    ButtonContainer,
    TextContainer
} from "./nft.styles";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import { Wrapper } from "../project-creation/project.creation.styles";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
import badge1 from "../../assets/badge1.png";
import badge2 from "../../assets/badge2.png";
import badge3 from "../../assets/badge3.png";









const Badge = () => {


    return (
        <NftParent>
            <NftWrapper>
            <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>
                <Header><h2>Badge Reward</h2>
                    <img src={arrow} alt="arrow" />
                </Header>
                <TextContainer>
                <h3>Celebrating Wildlife Guardians</h3>
                <p>Your generous donations have made a significant impact on wildlife 
                    <br></br>conservation, and as a token of our gratitude, we are thrilled to 
                    <br></br>present you with exclusive badge rewards. Each badge represents your 
                    <br></br>dedication to preserving endangered species, pristine habitats, and the 
                    <br></br>wonders of the natural world.
                    <br></br>By wearing your badge with pride, you showcase your commitment to 
                    <br></br>safeguarding the delicate balance of life on Earth. Your support has 
                    <br></br>enabled us to take vital steps towards protecting our planet's 
                    <br></br>biodiversity and securing a brighter future for wildlife.</p>
                    <h4>Select one of the Badges to claim your reward!</h4>
                    </TextContainer>
                <SummaryContainer1>
              
  
               <img src={badge1} alt="badge1"/>
                <img src={badge2} alt="badge2" />
                <img src={badge3} alt="badge3" />
                </SummaryContainer1>
                <ButtonContainer>
                    <Button>
                        <Link  style={{ textDecoration: 'none', color: 'white' }}>Claim your rewards now</Link>
                    </Button>
                </ButtonContainer>
                
                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                    </Wrapper>
            </NftWrapper>



        </NftParent>




    )





}


export default Badge;