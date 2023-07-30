import React, { useState } from "react";
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
import Checkbox from "../../components/checkbox/Checkbox"
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';





const ProjectSubmit = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    const [createProject, setCreateProject] = useState('');

    const CreateProject = (create) => {
            if (!createProject) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    fontWeight: 'bold',
                    title: 'Congratulations',
                    text: 'Congratulations! You have successfully created the project HornShield😊',
                    background: "#110A03",
                    confirmButtonColor: '#B98D63',
                    confirmButtonText: 'View Project',
                    // showConfirmButton: false,
                    timer: 2500
                });

                setCreateProject(create);
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'danger',
                    title: 'You have already Submitted a Project',
                    text: 'You can only submit your project once.',
                    background: "#110A03",
                    confirmButtonColor: '#B98D63',
                    confirmButtonText: 'OK',
                    timer: 2000
                });
            }
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
                                labelName="Acceptable currency"
                                placeholder="NatureDefenders accepts only USDT for the time being"
                                name="acceptableCurrrency"

                            />
                            <FormTextInput
                                labelName="Wallet address"
                                placeholder="e.g 0xd914...ABED"
                                name="walletAddress"

                            />
                            <FormTextInput
                                labelName="Estimated amount"
                                placeholder="How much is needed to fund the project in USD"
                                name="estimatedAmount"

                            />

                            <FormTextInput
                                labelName="Funding goals"
                                placeholder="Specify the amount of fund needed to complete the project"
                                name="fundingGoals"

                            />

                            <Checkbox
                                id="checkbox"
                                label="Caveat: I agree that 1% of the donation will be allocated to the
                                    NatureDefenders platform from the donated funds"
                                value={checked}
                                onChange={onChange}
                            />

                            <FormButton
                                text="Create Project"
                                color="#ffffff"
                                borderColor="#DA8450"
                                backgroundColor={"#DA8450"}
                                height='3rem'
                                marginLeft='2rem'
                                onClick={() => CreateProject('createProject')}
                                className={createProject === 'create Project' ? 'bg-gray-300 cursor-not-allowed' : '#B98D63'}

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

    export default ProjectSubmit;