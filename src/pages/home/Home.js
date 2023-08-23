import React  from "react";
import {
        HomeParent,
        HomeWrapper,
        CentreWrapper,
        TextContainer,
        GButton,
        LButton,
        ButtonContainer,
        NatureWrapper,
        ProjectsWrapper,
        LatestWrapper,
        TheonesWrapper,
        FooterWrapper,
        SubfooterWrapper,
        BarWrapper
} from "./home.styles";
import { Link } from "react-router-dom";
import BackgroundImage from "../../components/background-carousel/BackgroundImage";
import Naturedefenders from "../../components/naturedefenders/Naturedefenders";
import Projects from "../../components/projects/Projects";
import Latest from "../../components/latest/Latest";
import Theones from "../../components/theones/Theones";
import Footer from "../../components/footer/Footer";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";








const Home = () => {
   
        





        return (
                <HomeParent>
                        <HomeWrapper>
                                <BarWrapper>
                                        <Navbar />
                                </BarWrapper>
                                <CentreWrapper>
                                               <div> <BackgroundImage /></div>
                                        <TextContainer>

                                                <ButtonContainer><Link to='/sign-in' style={{ textDecoration: 'none', color: 'white' }}> <GButton>Get Started</GButton></Link>


                                                        <Link to='/project-creation' style={{ textDecoration: 'none', color: 'white' }}><LButton>Create Project</LButton></Link>

                                                </ButtonContainer>
                                                
                                        </TextContainer>
                                        

                                </CentreWrapper>
                                <NatureWrapper>
                                        <Naturedefenders />
                                </NatureWrapper>
                                <ProjectsWrapper>
                                        <Projects />
                                </ProjectsWrapper>
                                <LatestWrapper>
                                        <Latest />
                                </LatestWrapper>
                                <TheonesWrapper>
                                        <Theones />
                                </TheonesWrapper>

                                <FooterWrapper>
                                        <Footer />
                                </FooterWrapper>
                                <SubfooterWrapper>
                                        <Subfooter />
                                </SubfooterWrapper>
                        </HomeWrapper>



                </HomeParent>




        )



}


export default Home;