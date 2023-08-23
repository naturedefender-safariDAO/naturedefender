import React from "react";
import {
    NavbarParent,
    NavbarWrapper,
    LogoContainer,
    BigLinkContainer,
    NavbarLink,
    Button,
    ButtonWrapper
} from "./navbar.styles";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/search-icon.png";



const Navbar = () => {
   


    return (
        <NavbarParent>
            <NavbarWrapper>
                <LogoContainer><Link to="/"><img src={logo} alt="logo" /></Link>
                    <h1>NatureDefenders</h1></LogoContainer>
                <BigLinkContainer>
                    <NavbarLink><Link to='/' style={{ textDecoration: 'none', color: 'white' }} >Home</Link></NavbarLink>
                    <NavbarLink> <Link to='/ongoing-projects' style={{ textDecoration: 'none', color: 'white' }}>Explore</Link></NavbarLink>
                    <NavbarLink><Link to='/badge-reward' style={{ textDecoration: 'none', color: 'white' }}>Badge reward</Link></NavbarLink>
                    <NavbarLink><Link to='/why-naturedefenders' style={{ textDecoration: 'none', color: 'white' }}>About us </Link></NavbarLink>
                    <NavbarLink><Link style={{ textDecoration: 'none', color: 'white' }}>FAQs</Link></NavbarLink>
                </BigLinkContainer>
                <ButtonWrapper><img src={searchIcon} alt="search-icon" width={18} height={18} />
                    <Button>Connect Wallet</Button></ButtonWrapper>
                
                <div class="p-16 space-y-2 rounded shadow">
                  <Link to='/sign-in'> <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span> </Link>
                     <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span> 
                   <Link to='/sign-up' style={{marginTop:'1rem'}}><span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span></Link> 
                </div>
            </NavbarWrapper>
        </NavbarParent >
    )



}

export default Navbar;