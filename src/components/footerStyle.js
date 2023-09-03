import styled from 'styled-components';

export const FooterWrapper = styled('footer')(() => ({
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
}));

export const Container = styled('div')(() => ({
  maxWidth: '960px',
  margin: '0 auto',
}));

export const FooterText = styled('p')(() => ({
  margin: '0',
}));