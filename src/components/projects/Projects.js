import React from "react";
import {
    ProjectsParent,
    ProjectsWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2,
    Button,
    ButtonContainer
} from "./projects.styles";
import arrow from "../../assets/arrow.png";
import tusk from "../../assets/tusk.png";
import horn from "../../assets/horn.png";
import speed from "../../assets/speed.png";
import roar from "../../assets/roar.png";
import bark from "../../assets/bark.png";
import pride from "../../assets/pride.png";
import { Link } from "react-router-dom";






const Projects = () => {


    return (
        <ProjectsParent>
            <ProjectsWrapper>
                <Header><h2>Ongoing Conservation Projects</h2>
                    <img src={arrow} alt="arrow" />
                </Header>

                <SummaryContainer1>
                    <Link to='/project-details'><img src={horn} alt="horn" /></Link>
                    <img src={roar} alt="roar"/>
                    <img src={tusk} alt="tusk" />
                </SummaryContainer1>
                <SummaryContainer2>
                    <img src={pride} alt="pride" />
                    <img src={bark} alt="bark" />
                    <img src={speed} alt="speed" />
                </SummaryContainer2>
                <ButtonContainer>
                    <Button>
                        <Link  style={{ textDecoration: 'none', color: 'white' }}>Explore more Projects</Link>
                    </Button>
                </ButtonContainer>
            </ProjectsWrapper>



        </ProjectsParent>




    )





}


export default Projects;