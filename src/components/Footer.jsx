import React from 'react';
import { Container, FooterText, FooterWrapper } from './footerStyle';


function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterText>&copy; {new Date().getFullYear()} NARUTO QUIZE</FooterText>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
