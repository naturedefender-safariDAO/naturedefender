import React from "react";
import {
    CreationParent,
    CreationWrapper,
    FooterWrapper,
    SubfooterWrapper,
    DivideWrapper,
    Wrapper,
    Side,
    FormHeader,
    BarWrapper
} from "./project.creation.styles";
import Footer from "../../components/footer/Footer";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import FormTextInput from "../../components/custom-input/FormTextInput";






const ProjectCreation = () => {


    return (
        <CreationParent>
            <CreationWrapper>
                <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>

                <FormHeader>
                            <h3>PROJECT CREATION</h3>

                            <img src={arrow} alt="arrow" />
                            <p>Create a new project by filling out the form below</p>
                        </FormHeader>
                    <form>
                        

                        <FormTextInput
                            labelName="Company name"
                            placeholder="Add your company’s name and description"
                            name="companyName"

                        />

                        <FormTextInput
                            labelName="Contact Information"
                            placeholder="Add your contact information, email, phone number and social media links"
                            name="contactInformation"

                        />
                        <FormTextInput
                            labelName="Wallet Address"
                            placeholder="e.g 0xd914...ABED"
                            name="walletAddress"

                        />
                        <FormTextInput
                            labelName="Team background"
                            placeholder="Brief description of the team background, their qualification and experience"
                            name="teamBackground"

                        />
                        <FormTextInput
                            labelName="Project Title"
                            placeholder="A catchy and descriptive name for your project"
                            name="projectTitle"

                        />
                        <FormTextInput
                            labelName="Project Description"
                            placeholder="Detail explanation of your project and other necessary description"
                            name="projectDescription"

                        />
                        <FormTextInput
                            labelName="Funding goals"
                            placeholder="Specify the amount of fund needed to complete the project"
                            name="fundingGoals"

                        />
                        <FormTextInput
                            labelName="Add picture"
                            placeholder="Drag and drop or Select file from computer
                                        Pictures (in jpeg or png format only)"
                            name="addPicture"
                            height="5rem"

                        />
                        <FormTextInput
                            labelName="Rewards"
                            placeholder="Specify the reward for the donors"
                            name="rewards"

                        />
                        <FormTextInput
                            labelName="Road Map"
                            placeholder="Brief background of team members; their qualifications & experience"
                            name="fundingGoals"

                        />
                        <DivideWrapper>
                            <Side>
                               
                                <FormTextInput
                                    labelName="Country of Residence"
                                    placeholder="e.g Nigeria"
                                    name="country"

                                />
                            </Side>
                            <Side>
                                <FormTextInput
                                    labelName="Phone Number"
                                    placeholder="+234 "
                                    name="phoneNumber"

                                />
                            </Side>
                        </DivideWrapper>

                        <FormButton
                            text="Create Project"
                            color="#ffffff"
                            borderColor="#DA8450"
                            backgroundColor={"#DA8450"}

                        />




                    </form>

                    <FooterWrapper>
                        <Footer />
                    </FooterWrapper>
                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                </Wrapper>
            </CreationWrapper>
        </CreationParent>

    );
};

export default ProjectCreation;