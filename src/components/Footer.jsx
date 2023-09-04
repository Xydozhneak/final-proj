import React from 'react';
import { Container, FooterText, FooterWrapper } from './footerStyle';

const curentYear = new Date().getFullYear();
function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterText>&copy; {curentYear} NARUTO QUIZE</FooterText>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
