import React from "react";
import {
  ButtonContainer,
  CenterWrapper,
  FooterParent,
  SearchBarContainer,
  SearchBarForm,
  Button,
  SubscribeContainer
} from "./footer.styles";



const Footer = () => {
  return (

    <FooterParent>
      <CenterWrapper>
        <SubscribeContainer>
          <h3>Subscribe to our mailing list</h3>

          <h4>Stay informed about the latest wildlife conservation updates,endangered species</h4>
          <p>  initiatives, and valuable tips and strategies for supporting wildlife protection on our platform.
          </p>

          <ButtonContainer>
            <SearchBarContainer>
              <SearchBarForm>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Email Address"
                />
                <Button>Subscribe</Button>
              </SearchBarForm>
            </SearchBarContainer>


          </ButtonContainer>
        </SubscribeContainer>

      </CenterWrapper>
    </FooterParent>
  )



}

export default Footer;