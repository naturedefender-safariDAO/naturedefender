import React from "react";
import {
    CreationParent,
    CreationWrapper,
    SubfooterWrapper,
    Wrapper,
    FormHeader,
    BarWrapper
} from "./project.creation.styles";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import arrow from "../../assets/arrow.png";
import FormButton from "../../components/custom-button/FormButton";
import FormTextInput from "../../components/custom-input/FormTextInput";
import { useNavigate } from "react-router-dom";






const ProjectCreation = () => {

    const navigate = useNavigate();

    const routeToNextPage = () => {
        navigate("/project-submit")
    };


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

                        <div class="flex flex-col items-start justify-center w-3/4">
                            <label class="block mb-3 text-sm font-medium text-white dark:text-white" for="file_input">Add a Picture</label>
                            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-[#1A1818] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                            <p class="mt-1 text-sm text-white dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>

                        <FormButton
                            text="Continue"
                            color="#ffffff"
                            borderColor="#DA8450"
                            backgroundColor={"#DA8450"}
                            handleClick={routeToNextPage}

                        />




                    </form>


                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                </Wrapper>
            </CreationWrapper>
        </CreationParent>

    );
};

export default ProjectCreation;