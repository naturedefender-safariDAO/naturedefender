import React from "react";
import {
    LatestParent,
    LatestWrapper,
    Header,
    SummaryContainer1,
    SummaryContainer2,
    SummaryWrapper,
    SummaryContainer3
} from "./latest.styles";
import arrow from "../../assets/arrow.png";
import forest from "../../assets/forest.png";
import deforestation from "../../assets/deforestation.png";
import rhino from "../../assets/rhino.png";
import elephant from "../../assets/elephant.png";







const Latest = () => {


    return (
        <LatestParent>
            <LatestWrapper>
                <Header><h2>Latest update About earth</h2>
                    <img src={arrow} alt="arrow" />
                </Header>
                <SummaryWrapper>
                    <SummaryContainer1>
                        <img src={forest} alt="forest" />
                    </SummaryContainer1>
                    <SummaryContainer2>
                         <img src={deforestation} alt="deforestation" />
                          <img src={rhino} alt="rhino" />
                          <img src={elephant} alt="elephant" />
                   </SummaryContainer2>
                    <SummaryContainer3>
                        <h4>News on defrostration</h4>
                        <p>Deforestation disrupts the natural process of
                            <br></br>soil erosion prevention by removing the
                            <br></br>protective cover of trees</p>
                        <h3>Race to Save the Rhinos</h3>
                        <p>Black rhinos teeter on the edge of survival due
                            <br></br>to relentless poaching for their valuable horns.
                            <br></br>Conservation efforts strive to curb this
                            <br></br>alarming trend</p>
                        <h3>Elephant Extinction Crisis</h3>
                        <p>African elephants face mounting threats as
                            <br></br>poaching and habitat loss push them towards
                            <br></br>the brink of extinction</p>



                    </SummaryContainer3>
                </SummaryWrapper>

            </LatestWrapper>



        </LatestParent>




    )





}


export default Latest;