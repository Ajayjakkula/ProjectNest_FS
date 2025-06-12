import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #111;
  color: #aaa;
  text-align: center;
  padding: 20px;
  font-size: 14px;
`;


const ContactLink = styled.a`
  color: #1e90ff;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
  
      <p>"The best way to predict the future is to create it." – Peter Drucker</p>
      <p>"Success is not final, failure is not fatal: It is the courage to continue that counts." – Winston Churchill</p>

      
      <p>
        📩 Contact:
        <ContactLink href="mailto:ajayjakkulaaa@gmail.com">
          ajayjakkulaaa@gmail.com
        </ContactLink>
      </p>
    </FooterContainer>
  );
};

export default Footer;
