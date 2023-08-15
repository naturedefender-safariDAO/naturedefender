import React from "react";
import {
    OngoingParent,
    OngoingWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2,
    SummaryContainer3,
    SubfooterWrapper,
    BarWrapper
} from "./ongoingprojects.styles";
import arrow from "../../assets/arrow.png";
import tusk from "../../assets/tusk.png";
import horn from "../../assets/horn.png";
import speed from "../../assets/speed.png";
import roar from "../../assets/roar.png";
import bark from "../../assets/bark.png";
import pride from "../../assets/pride.png";
import root from "../../assets/root.png";
import canopy from "../../assets/canopy.png";
import silent from "../../assets/silent.png";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import { Wrapper } from "../project-creation/project.creation.styles";
import { Link } from "react-router-dom";








const OngoingProjects = () => {


    return (
        <OngoingParent>
            <OngoingWrapper>
            <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>
                <Header><h2>Ongoing Conservation Projects</h2>
                    <img src={arrow} alt="arrow" />
                </Header>

                <SummaryContainer1>
                 <Link to='/project-details'><img src={horn} alt="horn" /></Link>
                    <img src={roar} alt="roar" />
                    <img src={tusk} alt="tusk" />
                </SummaryContainer1>
                <SummaryContainer2>
                    <img src={pride} alt="pride" />
                    <img src={bark} alt="bark" />
                    <img src={speed} alt="speed" />
                </SummaryContainer2>
                <SummaryContainer3>
                    <img src={root} alt="root"/>
                    <img src={silent} alt="silent"/>
                    <img src={canopy} alt="canopy"/>
                </SummaryContainer3>
                
                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                    </Wrapper>
            </OngoingWrapper>



        </OngoingParent>




    )





}


export default OngoingProjects;