import React, { useState } from "react";
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
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';
import Navbar from "../../components/navbar/Navbar";








const Home = () => {


        const [getStarted, setGetStarted] = useState('');

        const GetStarted = (start) => {
                if (!getStarted) {
                        Swal.fire({
                                position: 'center',
                                icon: 'success',
                                fontWeight: 'bold',
                                title: 'Welcome User',
                                text: 'This platform has two users, how would yu like to sign up?',
                                background: "#110A03",
                                confirmButtonColor: '#B98D63',
                                confirmButtonText: 'Proceed',
                                // showConfirmButton: false,
                                timer: 2500
                        });

                        setGetStarted(start);
                } else {
                        Swal.fire({
                                position: 'center',
                                icon: 'danger',
                                title: 'You have already Signed up',
                                text: 'You can only sign up once.',
                                background: "#110A03",
                                confirmButtonColor: '#B98D63',
                                confirmButtonText: 'OK',
                                timer: 2000
                        });
                }
        };






        return (
                <HomeParent>
                        <HomeWrapper>
                                <BarWrapper>
                                        <Navbar />
                                </BarWrapper>
                                <CentreWrapper>
                                               <div> <BackgroundImage /></div>
                                        <TextContainer>

                                                <ButtonContainer> <GButton onClick={() => GetStarted('getStarted')}
                                                        className={getStarted === 'get Started' ? 'bg-gray-300 cursor-not-allowed' : '#B98D63'}
                                                >Get Started</GButton>


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