import React from "react";
import {
    CreationParent,
    CreationWrapper,
    FooterWrapper,
    SubfooterWrapper,
    Wrapper,
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
                            labelName="Company Location"
                            placeholder="Add your company’s location"
                            name="companyLocation"

                        />
                        <FormTextInput
                            labelName="Contact Information"
                            placeholder="Add your contact information, email, phone number and social media links"
                            name="contactInformation"

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
                            labelName="Project Impact"
                            placeholder="Explain how you will contribute to the betterment of society."
                            name="projectImpact"

                        />
                        <FormTextInput
                            labelName="Preventive measures"
                            placeholder="The preventive measures you will put in place to secure the animals"
                            name="preventiveMeasures"
                            height="5rem"

                        />
                        <FormTextInput
                            labelName="Habitation Restoration"
                            placeholder="Provide an explanation of the habitat restoration project"
                            name="habitationRestoration"

                        />
                        <FormTextInput
                            labelName="Add a Picture"
                            placeholder="Drag and drop or Select file from computer, Pictures (in jpeg or png format only)"
                            name="addPicture"
                            height="5rem"

                        />
                       

                        <FormButton
                            text="Continue"
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