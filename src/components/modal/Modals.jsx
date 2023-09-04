import React from 'react';
import Typography from '@mui/material/Typography';
import { ModalWrap, Box } from './modalStyles';
import Button from '@mui/material/Button';

export default function InfoModal({ content, onClose }) {

  return (
    <ModalWrap>
      <Box>
        <img src={content.img} style={{ width: 320, borderRadius: 20 }} alt='NarutoImg'/>

        <Typography id="server-modal-title" variant="h6" component="h2">
          {content.title}
        </Typography>
        <Typography id="server-modal-description" sx={{ pt: 2 }}>
          {content.description}
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
          <Button sx={{ marginLeft: 5 }} variant="contained" color="primary" onClick={() => { alert('Quize Started') }}>
            Start Quize
          </Button>
        </div>
      </Box>
    </ModalWrap>
  );
}