import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import DecouvrezNegodi from './footer-compo/DecouvrezNegodi';
import MentionsNegodi from './footer-compo/MentionsNegodi';
import ContactezNegodi from './footer-compo/ContactezNegodi ';
import LogoNegodiBottom from './footer-compo/LogoNegodiBottom';

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
      <Router>
        <div className="container-fluid footer">
          <div className="row">
            <LogoNegodiBottom />
          </div>
          <div className="row row-cols-2">
            <DecouvrezNegodi />
            <ContactezNegodi />
          </div>
          <div className="row d-block">
            <MentionsNegodi />
          </div>
        </div>
      </Router>
    </StyledFooter>
  );
};
export default Footer;
