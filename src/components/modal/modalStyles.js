import styled from "styled-components";

export const ModalWrap = styled('div') (()=>({
     position: 'fixed',
     top :0,
     left: 0,
    height: '100vh',
    width : '90vw',
 backgroundColor:'#8080804f',
    display:'flex',
   alignItems: 'center',
    justifyContent: 'center',
    zIndex : 2
    
}))

export const Box = styled('div') (()=>({
    position: 'relative',
    width: 340,
    backgroundColor: 'white',
    boxShadow: (theme) => theme.shadows[5],
    padding:20,
    p: 4,
    borderRadius:20
}))