import React, { useState, useEffect } from "react";

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
import { Button, useToast, Box, Spinner } from '@chakra-ui/react';
import Checkbox from "../../components/checkbox/Checkbox";
import { APIConfig } from "../../config/apiConfig";






const Signup = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
        country: "",
        user_type: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const toast = useToast();
    // const dispatch = useDispatch();

    useEffect(() => {
        if (success) {
            toast({
                position: "top-left",
                render: () => (
                    <Box color="white" p={3} bg="green.500" fontSize={15}>
                        Sign up successful. Please check your mail for verification.
                    </Box>
                ),
            });
        }

        if (error)
            toast({
                position: "top-right",
                render: () => (
                    <Box color="white" p={3} bg="red.500" fontSize={15}>
                        {error}
                    </Box>
                ),
            });
    }, [success, toast, error]);

    const { fullname, email, password, country, user_type } = form;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fullname || !user_type || !email || !password || !country) {
            toast({
                position: "top-right",
                render: () => (
                    <Box color="white" p={3} bg="red.500" fontSize={15}>
                        All fields are required!
                    </Box>
                ),
            });
            return;
        }

        setLoading(true);

        try {
            const { data } = await APIConfig.post("users/register", form);
            console.log(data);
            // dispatch(
            //   setUser({
            //     fullname: data.fullname,
            //     email: data.local.email,
            //   })
            // );
            setLoading(false);
            setSuccess(true);
        } catch (error) {
            setLoading(false);
            setError(error.response.data.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <SignupParent>
            <SignupWrapper>
                <Wrapper>

                    <form>
                        <FormHeader>
                            <h3>CREATE YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" marginLeft="2rem" />
                        </FormHeader>
                        <FormTextInput
                            labelName="Full Name"
                            placeholder="e.g Devon Lane"
                            name="fullName"
                            onChange={handleChange}

                        />
                        <FormTextInput
                            labelName="Email address"
                            placeholder="e.g devonlane@gmail.com"
                            name="emailAddress"
                            onChange={handleChange}

                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"
                            onChange={handleChange}

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
                            onChange={handleChange}

                        />
                        <Select
                            placeholder="Select option"
                            height={"3.2rem"}
                            onChange={handleChange}
                            name="user_type"
                            value={user_type}>

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
                            onClick={handleSubmit}
                        >
                            {!loading ? 'Create an account' : <Spinner size="sm" color="white.500" />}
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