import React from "react";
import {
    NatureParent, NatureWrapper,
    SummaryCard,
    SummaryContainer,
    Header
} from "./nature.defenders.styles";
import star from "../../assets/star.png";
import arrow from "../../assets/arrow.png";






const Naturedefenders = () => {


    return (
        <NatureParent>
            <NatureWrapper>
                <Header><h2>Why NatureDefenders?</h2>
                    <img src={arrow} alt="arrow" />
                </Header>
                <SummaryContainer>
                    <SummaryCard background="#110A03" borderColor="#110A03">
                        <img src={star} alt="star" width={40}/>
                        <h3>Direct Impact</h3>
                        <p>Donating through our platform ensures
                            <br></br>that your contributions directly support
                            <br></br>conservation projects aimed at saving
                            <br></br>endangered animals in Africa, 
                            <br></br>maximizing the impact of your donations.</p>

                    </SummaryCard>
                    <SummaryCard background="#110A03" borderColor="#110A03">
                        <img src={star} alt="star" width={40} />
                        <h1>Transparency and Accountability</h1>
                        <p>Our platform ensures transparency and
                            <br></br>accountability by enabling donors to track
                            <br></br>and verify the utilization of their funds,
                            <br></br>promoting trust and accountability in
                            <br></br>conservation efforts</p>
                    </SummaryCard>
                    <SummaryCard background="#110A03" borderColor="#110A03">
                        <img src={star} alt="star"  width={40}/>
                        <h1>Efficiency and Cost-effectiveness</h1>
                        <p>By leveraging blockchain technology and
                            <br></br>cryptocurrency donations, our platform
                            <br></br>minimizes transaction costs, allowing a
                            <br></br>higher proportion of donated funds to
                            <br></br>benefit wildlife conservation projects.</p>
                    </SummaryCard>
                </SummaryContainer>

            </NatureWrapper>



        </NatureParent>




    )





}


export default Naturedefenders;