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
                    <NavbarLink> <Link  to='/ongoing-projects'  style={{ textDecoration: 'none', color: 'white' }}>Explore</Link></NavbarLink>
                    <NavbarLink><Link  to='/nft-reward' style={{ textDecoration: 'none', color: 'white' }}>Projects</Link></NavbarLink>
                    <NavbarLink><Link style={{ textDecoration: 'none', color: 'white' }}>About us </Link></NavbarLink>
                    <NavbarLink><Link style={{ textDecoration: 'none', color: 'white' }}>FAQs</Link></NavbarLink>
                </BigLinkContainer>
                <ButtonWrapper><img src={searchIcon} alt="search-icon" width={18} height={18} />
                    <Button>Connect Wallet</Button></ButtonWrapper>

            </NavbarWrapper>
        </NavbarParent >
    )



}

export default Navbar;