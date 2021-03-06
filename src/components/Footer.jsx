import React from 'react';
import styled from 'styled-components';
import ContactezNegodi from './footer-compo/ContactezNegodi ';
import DecouvrezNegodi from './footer-compo/DecouvrezNegodi';
import LogoNegodiBottom from './footer-compo/LogoNegodiBottom';
import MentionsNegodi from './footer-compo/MentionsNegodi';

const StyledFooter = styled.footer`
  a {
    color: #ffffff;
  }
  .footer {
    background-color: #2a96af;
    color: #ffffff;
  }
  .footer ul {
    list-style-type: none;
  }

  .footer li {
    text-transform: uppercase;
  }
  .logoMail {
    height: 15px;
    width: 20px;
    margin-right: 0.5vw;
  }
  #mail {
    text-transform: initial;
  }

  .footerbottom {
    background-color: #2f6c7f;
    color: #ffffff;
  }

  .listBackground {
    background-color: transparent;
    border: none;
  }
  .social {
    color: #ffffff;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer container-fluid">
        <LogoNegodiBottom />
        <div className="row row-cols-1 row-cols-lg-2 mb-5">
          <div className="offset-2" />
          <div className="col-lg">
            <DecouvrezNegodi />
          </div>
          <div className="col-lg">
            <ContactezNegodi />
          </div>
          <div className="offset-2" />
        </div>
        <div className="row d-block">
          <MentionsNegodi />
        </div>
      </div>
    </StyledFooter>
  );
};
export default Footer;
