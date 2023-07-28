import React from "react";
import {
    NftParent,
    NftWrapper,
    Header,
    SubfooterWrapper,
    FooterWrapper,
    BarWrapper,
    SummaryContainer1,
    Button,
    ButtonContainer,
    TextContainer
} from "./nft.styles";
import Footer from "../../components/footer/Footer";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import { Wrapper } from "../project-creation/project.creation.styles";
import hornshield from "../../assets/hornshield.png";
import shieldleft from "../../assets/shieldleft.png";
import shieldright from "../../assets/shieldright.png";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";









const NFT = () => {


    return (
        <NftParent>
            <NftWrapper>
            <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>
                <Header><h2>NFT Reward</h2>
                    <img src={arrow} alt="arrow" />
                </Header>
                <TextContainer>
                <h3>Art for a Cause</h3>
                <p>Own a Piece of Wildlife's Beauty with Exclusive NFT Rewards for 
                    <br></br>Supporting Conservation! Immerse yourself in the captivating world of 
                    <br></br>wildlife conservation and experience the beauty of nature like never 
                    <br></br>before. With our exclusive NFT rewards, you have the opportunity to 
                    <br></br>own a piece of wildlife's beauty while making a meaningful impact on 
                    <br></br>conservation efforts. Each NFT is a digital masterpiece, showcasing 
                    <br></br>stunning visuals that capture the essence of endangered species, 
                    <br></br>pristine habitats, and the wonders of the natural world. These unique 
                    <br></br>digital collectibles are not just tokens; they represent your dedication 
                    <br></br>to preserving the very essence of life on Earth.</p>
                    <h4>Select one of the pictures to claim your reward!</h4>
                    </TextContainer>
                <SummaryContainer1>
              
  
               <img src={shieldleft} alt="shieldleft" style={{marginRight:'-6rem'}}/>
                <img src={hornshield} alt="hornshield" style={{transform:'translate(-10%, -10%)'}}/>
                <img src={shieldright} alt="shieldright" style={{marginLeft:'-10rem'}}/>
                </SummaryContainer1>
                <ButtonContainer>
                    <Button>
                        <Link  style={{ textDecoration: 'none', color: 'white' }}>Claim your rewards now</Link>
                    </Button>
                </ButtonContainer>
                <FooterWrapper>
                        <Footer />
                    </FooterWrapper>
                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                    </Wrapper>
            </NftWrapper>



        </NftParent>




    )





}


export default NFT;