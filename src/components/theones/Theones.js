import React from "react";
import {
    TheonesParent,
    TheonesWrapper,
    Header,
    SummaryContainer,
   
} from "./theones.styles.js";
import be from "../../assets/be.png";
import stand from "../../assets/stand.png";
import give from "../../assets/give.png";
import arrow from "../../assets/arrow.png";





const Theones = () => {


    return (
        <TheonesParent>
            <TheonesWrapper>
                <Header><h2>The ones who have no voice, need</h2>
                           <h3>you to speak up</h3>
                    <img src={arrow} alt="arrow" />
                </Header>

                <SummaryContainer>
                   <img src={stand} alt="stand" />
                    <img src={be} alt="be" />
                   <img src={give} alt="give" />
                </SummaryContainer>
                
            </TheonesWrapper>



        </TheonesParent>




    )





}


export default Theones;