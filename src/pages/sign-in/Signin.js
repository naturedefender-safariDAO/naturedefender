
import React from "react";
import {
    SigninParent,
    SigninWrapper,
    Wrapper,
    FormHeader
} from "./sign.in.styles";
import { Link } from "react-router-dom";
import CarouselPage from "../../components/carousel/Carousel";
import FormTextInput from "../../components/custom-input/FormTextInput";
import arrow from "../../assets/arrow.png";
import { Button, CloseButton} from '@chakra-ui/react';







const Signin = () => {
   
      

    return (
        <SigninParent>
            <SigninWrapper>
                <Wrapper>

                    <form >
                      <Link to='/'>  <CloseButton/></Link>
                        <FormHeader>
                            <h3>SIGN INTO YOUR ACCOUNT</h3>

                            <img src={arrow} alt="arrow" />
                        </FormHeader>

                        <FormTextInput
                            labelName="Email address"
                            placeholder="e.g devonlane@gmail.com"
                            name="email"
                           
                            
                           

                        />

                        <FormTextInput
                            labelName="Password"
                            placeholder="********"
                            name="password"
                           
                        />



                        <Button
                            size='md'
                            height='48px'
                            width='460px'
                            border='10px'
                            borderRadius='5px'
                            color='#fff'
                            borderColor='#DA8450'
                            background='#DA8450'
                            fontWeight='500'
                            marginTop='20px'
                           
                        >
                         Sign in
                        </Button>

                        <p>Don't have an account?<Link to="/sign-up" style={{ textDecoration: 'none', color: '#DA8450' }}>Sign up</Link></p>


                    </form>
                 
                    <div style={{height:'80rem', width:'45rem', marginRight:"5rem"}}><CarouselPage/></div>
                </Wrapper>
               
            </SigninWrapper>
        </SigninParent>

    );
};

export default Signin;