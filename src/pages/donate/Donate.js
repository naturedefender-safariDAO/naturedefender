import React, {useState} from "react";
import {
    DonateParent,
    DonateWrapper,
    Header,
    SubfooterWrapper,
    BarWrapper,
    SummaryContainer1,
    SummaryContainer2,
    Button,
    ButtonContainer,
    TextContainer,
    EstimateContainer
} from "./donate.styles";
import Subfooter from "../../components/subfooter/Subfooter";
import Navbar from "../../components/navbar/Navbar";
import { Wrapper } from "../project-creation/project.creation.styles";
import rhinotwo from "../../assets/rhinotwo.png";
import { Link } from "react-router-dom";
import 'sweetalert2/dist/sweetalert2.css';
import Swal from 'sweetalert2';
import Checkbox from "../../components/checkbox/Checkbox";











const Donate = () => {
        
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };
        const [donate, setDonate] = useState('');

        const Donate = (donate) => {
                if (!donate) {
                        Swal.fire({
                                position: 'center',
                                icon: 'success',
                                fontWeight: 'bold',
                                title: 'You have successfully donated',
                                text: 'Congratulations! You have successfully donated to support HornShield😊',
                                background: "#110A03",
                                confirmButtonColor: '#B98D63',
                                confirmButtonText: 'Claim your Badge reward',
                                // showConfirmButton: false,
                                timer: 2500
                        });

                        setDonate(donate);
                } else {
                        Swal.fire({
                                position: 'center',
                                icon: 'danger',
                                title: 'You have already donated',
                                text: 'Thank you for donating.',
                                background: "#110A03",
                                confirmButtonColor: '#B98D63',
                                confirmButtonText: 'OK',
                                timer: 2000
                        });
                }
        };
        

    return (
        <DonateParent>
            <DonateWrapper>
                <BarWrapper>
                    <Navbar />
                </BarWrapper>
                <Wrapper>
                    <img src={rhinotwo} alt="rhinotwo" style={{ marginLeft: '4rem', marginTop: '4rem' }} />
                    <Header><h2>Donate</h2>

                    </Header>
                    <TextContainer>
                        <h3>HornShield</h3>
                        <h4>Project overview</h4>
                        <p>HornShield is a dedicated initiative aimed at safeguarding
                            <br></br>black rhinos from the threats of poaching and habitat loss.
                            <br></br>The project employs a two-fold approach, focusing on
                            <br></br>implementing robust security measures and supporting
                            <br></br>habitat restoration efforts. By combining these strategies,
                            <br></br>HornShield aims to ensure the long-term survival and well-
                            <br></br>being of black rhino populations.</p>
                        <EstimateContainer>
                            <h1> Estimated Amount<b style={{ marginLeft: '4rem' }}>Amount raised</b>
                                <br></br>5,000 ETH <b style={{ marginLeft: '8rem' }}> 3,825ETH</b> </h1>
                        </EstimateContainer>
                        <h5>Project Selected</h5>
                        <h6>HornShield</h6>
                    </TextContainer>
                    <SummaryContainer1>
                        <h6>Total</h6>
                        <p>Your Contribution<b style={{ marginLeft: '4rem' }}>O.235 USDT</b></p>


                    </SummaryContainer1>
                    <SummaryContainer2>
                    <p>Your contribution must be valued at 2USD to be eligible
                        <br></br> for matching</p>
                        <Checkbox
                            id="checkbox"
                            label="Caveat: I agree that only 99% of the amount donated will be remited out of the total contribution, 
                            the remaining1% of the donation will be allocated to the NatureDefenders platform."
                            value={checked}
                            onChange={onChange}
                        />
                        </SummaryContainer2>
                    <ButtonContainer>
                        <Button onClick={() => Donate('donate')}
                                                        className={donate === 'donate' ? 'bg-gray-300 cursor-not-allowed' : '#B98D63'}>
                            <Link style={{ textDecoration: 'none', color: 'white' }}>Donate</Link>
                        </Button>
                    </ButtonContainer>
                    
                    <SubfooterWrapper>
                        <Subfooter />
                    </SubfooterWrapper>
                </Wrapper>
            </DonateWrapper>



        </DonateParent>




    )





}


export default Donate;