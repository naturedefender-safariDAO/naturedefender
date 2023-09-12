import React, { useState } from "react";

import {
    SignupParent,
    SignupWrapper,
    Wrapper,
    FormHeader,
    Select
} from "./sign.up.styles";
import { Link } from "react-router-dom";
import CarouselPage from "../../components/carousel/Carousel";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import { Button,  CloseButton } from '@chakra-ui/react';
import Checkbox from "../../components/checkbox/Checkbox";







const Signup = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

   
  
    return (
        <SignupParent>
            <SignupWrapper>
                <Wrapper>

                    <form>
                       <Link to='/'> <CloseButton/></Link>
                        <FormHeader>
                            <h3>CREATE YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" marginLeft="2rem" />
                        </FormHeader>
                        <FormTextInput
                            labelName="Full Name"
                            placeholder="e.g Devon Lane"
                            name="fullName"
                            

                        />
                        <FormTextInput
                            labelName="Email address"
                            placeholder="e.g devonlane@gmail.com"
                            name="emailAddress"
                          

                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"
                           

                        />
                        <h4>Password must contain:</h4>
                        <p> At least 8 characters
                            <br></br>At least one number
                            <br></br>At least one lowercase letter
                            <br></br>At least one uppercase letter</p>
                        <FormTextInput
                            labelName="Country of Residence"
                            placeholder="Nigeria"
                            name="country"
                            

                        />
                        <Select
                            placeholder="Select option"
                            height={"3.2rem"}
                            
                            name="user_type"
                           >

                            <option value="" hidden>Select your type of user</option>
                            <option value="1">Donor</option>
                            <option value="2">Project Administrator</option>


                        </Select>
                        <Checkbox
                            id="checkbox"
                            label="By signing up you accept our Terms of Service and Privacy Policy."
                            value={checked}
                            onChange={onChange}
                            fontSize='0.5rem'
                        />
                        <Button
                            size='md'
                            height='48px'
                            width='380px'
                            border='10px'
                            borderRadius='5px'
                            color='#fff'
                            borderColor='#DA8450'
                            background='#DA8450'
                            fontWeight='500'
                            marginTop='20px'
                            
                        >
                            Create an account 
                        </Button>


                        <p>Already have an account? <Link to="/sign-in" style={{ textDecoration: 'none', color: '#da8450' }}>Sign in</Link></p>

                    </form>
                    <div style={{ height: '90rem', width: '45rem' }}><CarouselPage /></div>

                </Wrapper>
            </SignupWrapper>
        </SignupParent>

    );
};

export default Signup;