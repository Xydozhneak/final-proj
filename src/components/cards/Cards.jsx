import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoModal from '../modal/Modals';

export default function QuizeCard({ quizes }) {
  const quizeDescription = quizes.description.substring(0, 100);
  const [isShowModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <Card sx={{ width: 300, maxWidth: 345, margin: '20px',}}  key={quizes.id}>
      <CardMedia
        sx={{ height: 140 }}
        image={quizes.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {quizes.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${quizeDescription}....`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpenModal}  size="lg"> More </Button>
        <Button onClick={() => { alert('Quize Started') }} size="lg">Start</Button>
      </CardActions>
      {isShowModal && (
        <InfoModal content={quizes} onClose={handleCloseModal} />
      )}

    </Card>
  );
}
