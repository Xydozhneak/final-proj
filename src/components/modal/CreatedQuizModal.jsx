import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ModalWrap, Box } from './modalStyles';

export default function CreateQuizeModal({ onClose }) {
  return (
    <ModalWrap>
      <Box>
        <Typography id="server-modal-title" variant="h6" component="h2">
          QUIZE WAS CREATED
        </Typography>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
      </Box>
    </ModalWrap>
  );
}
